import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { Container } from "./components/container";
import { PostCard } from "./components/post-card";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Container>
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
            <PostCard key={post.id} post={post} />
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
      </Container>
    </div>
  );
}
