import { Container } from "@/app/components/container";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Container>
        <article className="animate-pulse">
          {/* Header skeleton */}
          <header className="mb-12">
            <div className="h-10 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="mt-4 flex gap-3">
              <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-4 w-4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-4 w-4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-4 w-20 rounded bg-zinc-200 dark:bg-zinc-800"></div>
            </div>
          </header>

          {/* Content skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800"
              ></div>
            ))}
            <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
        </article>
      </Container>
    </div>
  );
}
