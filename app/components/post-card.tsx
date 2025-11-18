import { Post } from "@/lib/posts";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col gap-3">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
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

          {/* Title */}
          <h2 className="text-2xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>

          {/* Read More */}
          <div className="mt-2">
            <span className="text-sm font-medium text-blue-600 group-hover:underline dark:text-blue-400">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
