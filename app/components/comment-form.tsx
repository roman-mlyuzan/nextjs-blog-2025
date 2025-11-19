"use client";

import { useActionState } from "react";
import { createComment } from "../actions/comments";

interface Prop {
  postId: string;
}

export function CommentForm({ postId }: Prop) {
  const [state, formAction, isPending] = useActionState(createComment, null);

  return (
    <form
      key={state?.success ? "success" : "form"}
      action={formAction}
      className="space-y-4"
    >
      <input type="hidden" name="postId" value={postId} />

      {state?.error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
          {state.error}
        </div>
      )}

      {state?.success && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
          Comment posted successfully!
        </div>
      )}

      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Name
        </label>
        <input
          type="text"
          id="author"
          name="author"
          defaultValue={state?.fields?.author ?? ""}
          required
          disabled={isPending}
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Comment
        </label>
        <textarea
          id="content"
          name="content"
          defaultValue={state?.fields?.content ?? ""}
          required
          disabled={isPending}
          rows={4}
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          placeholder="Share your thoughts..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add comment
      </button>
    </form>
  );
}
