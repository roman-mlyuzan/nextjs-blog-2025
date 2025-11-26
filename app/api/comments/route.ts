import { addComment, getCommentsBySlug } from "@/lib/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (!slug)
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });

  const data = await getCommentsBySlug(slug);

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { slug, author, content } = body;

  if (!author || !content || !slug) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (author.length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters" },
      { status: 400 }
    );
  }

  if (content.length < 10) {
    return NextResponse.json(
      { error: "Comment must be at least 10 characters" },
      { status: 400 }
    );
  }

  const data = await addComment({ slug, author, content });

  return NextResponse.json(data, { status: 201 });
}
