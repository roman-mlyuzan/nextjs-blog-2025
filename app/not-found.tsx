import Link from "next/link";
import { Container } from "./components/container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Container>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mb-6 text-8xl">404</div>

          <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Page Not Found
          </h1>

          <p className="mb-8 max-w-md text-zinc-600 dark:text-zinc-400">
            Sorry, we couldn't find the page you're looking for. The content may
            have been moved or deleted.
          </p>

          <div className="flex gap-4">
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Go Home
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-zinc-300 px-6 py-3 font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              About
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
