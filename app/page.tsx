import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            React Deep Dive Blog
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Learning Next.js, React Server Components, and modern web
            development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <Link href={`blog/${post.slug}`}>
                <div className="flex flex-col gap">
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
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-2">
                    <span className="text-sm font-medium text-blue-600 group-hover:underline dark:text-blue-400">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* About Link */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            About this blog →
          </Link>
        </div>
      </main>
    </div>
  );
}
