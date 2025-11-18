import { LikeButton } from "@/app/components/like-button";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to home
        </Link>

        <header className="mt-8 mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {post.content}
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              ← Back to all posts
            </Link>
            <LikeButton postId={post.id} />
          </div>
        </footer>
      </article>
    </div>
  );
}
