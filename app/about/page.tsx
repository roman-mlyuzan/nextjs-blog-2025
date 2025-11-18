import { Container } from "../components/container";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Container>
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About This Blog
          </h1>

          <div className="mt-8 space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p className="text-lg">
              Welcome to my React Deep Dive learning journey! This blog
              documents my systematic exploration of React, Next.js, and modern
              web development patterns.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8">
              Background
            </h2>
            <p>
              I'm a senior front-end developer with 7+ years of
              TypeScript/JavaScript experience, specializing in Angular
              (versions 5-19). While I have prior React exposure, I'm now
              working through React fundamentals to advanced patterns
              methodically—ensuring zero gaps and building production-ready
              expertise.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8">
              What I've Completed
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Days 1-2:</strong> React fundamentals with Tic-Tac-Toe
              </li>
              <li>
                <strong>Days 3-5:</strong> Hooks mastery with Todo app
              </li>
              <li>
                <strong>Days 6-7:</strong> Performance optimization
              </li>
              <li>
                <strong>Days 8-10:</strong> Production Finance Dashboard
              </li>
              <li>
                <strong>Day 11+:</strong> Next.js App Router fundamentals
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8">
              Tech Stack
            </h2>
            <p>This blog is built with:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Next.js 16 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS 4</li>
              <li>React Server Components</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8">
              Connect
            </h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/roman-mlyuzan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                GitHub
              </a>
              <span className="text-zinc-400">•</span>
              <a
                href="https://linkedin.com/in/roman-mlyuzan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
