export function CommentsSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800"></div>
            <div className="h-4 w-20 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800"></div>
            <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
