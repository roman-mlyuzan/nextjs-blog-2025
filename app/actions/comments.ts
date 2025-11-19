"use server";

import { addComment } from "@/lib/posts";
import { revalidatePath } from "next/cache";

type State = {
  error?: string;
  success?: boolean;
  fields?: { author: string; content: string };
};

export async function createComment(
  prevState: State | null,
  formData: FormData
): Promise<State> {
  const postId = formData.get("postId") as string;
  const author = formData.get("author") as string;
  const content = formData.get("content") as string;

  const returnError = (error: string) => ({
    error,
    fields: { author, content },
  });

  if (!author || !content || !postId) {
    return returnError("All fields are required");
  }

  if (author.length < 2) {
    return returnError("Name must be at least 2 characters");
  }

  if (content.length < 10) {
    return returnError("Comment must be at least 10 characters");
  }

  try {
    await addComment({
      postId,
      author,
      content,
    });

    revalidatePath(`/blog/${postId}`);

    return {
      success: true,
    };
  } catch (error) {
    return returnError("Failed to post comment. Please try again.");
  }
}
