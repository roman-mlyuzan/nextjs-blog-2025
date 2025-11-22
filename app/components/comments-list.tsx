import type { Comment } from "@/lib/posts";

interface CommentListProps {
  commentsPromise: Promise<Comment[]>;
}

export async function CommentsList({ commentsPromise }: CommentListProps) {
  const comments = await commentsPromise;

  if (!comments || comments.length === 0) {
    return (
      <p className="text-center text-zinc-500 dark:text-zinc-400">
        No comments yet. Be the first to comment!
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.slug}
          className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {comment.author}
            </span>
            <time className="text-sm text-zinc-500 dark:text-zinc-400">
              {new Date(comment.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
