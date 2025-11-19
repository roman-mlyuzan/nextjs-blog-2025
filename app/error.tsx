"use client";

import { useEffect } from "react";
import { Container } from "./components/container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Container>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mb-6 text-6xl">⚠️</div>

          <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Something went wrong!
          </h1>

          <p className="mb-8 max-w-md text-zinc-600 dark:text-zinc-400">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>

          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </Container>
    </div>
  );
}
