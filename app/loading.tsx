export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header Skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="h-10 w-64 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="mt-2 h-6 w-96 rounded bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        {/* Post Cards Skeleton */}
        <div className="grid gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="space-y-3">
                {/* Metadata skeleton */}
                <div className="flex gap-3">
                  <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                  <div className="h-4 w-4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                  <div className="h-4 w-16 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                </div>

                {/* Title skeleton */}
                <div className="h-8 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800"></div>

                {/* Excerpt skeleton */}
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800"></div>
                  <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
