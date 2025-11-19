// Mock blog post data

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: "1",
    slug: "react-server-components",
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into how React Server Components work and why they matter for modern web applications.",
    content: `React Server Components represent a paradigm shift in how we build React applications. Unlike traditional React components that run in the browser, Server Components execute on the server and send rendered HTML to the client.

## Key Benefits

1. **Zero Bundle Size**: Server Components don't add to your JavaScript bundle
2. **Direct Backend Access**: Access databases, file systems, and APIs directly
3. **Automatic Code Splitting**: Each Server Component is a natural split point
4. **Improved Performance**: Less JavaScript to download and execute

## When to Use Server Components

- Fetching data from databases
- Rendering static content
- Accessing backend-only resources
- Building SEO-friendly pages

Server Components are the default in Next.js App Router, making your apps faster by default.`,
    date: "2025-01-15",
    author: "Roman Mlyuzan",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "nextjs-app-router",
    title: "Next.js App Router: A Practical Guide",
    excerpt:
      "Learn the new App Router architecture and how it differs from the Pages Router.",
    content: `The App Router is a new paradigm in Next.js that embraces React Server Components and provides a more intuitive file-based routing system.

## File-Based Routing

Instead of pages, you organize your app with folders:

- \`app/page.tsx\` → Homepage
- \`app/about/page.tsx\` → About page
- \`app/blog/[slug]/page.tsx\` → Dynamic blog post

## Special Files

- \`layout.tsx\`: Shared UI for a route segment
- \`page.tsx\`: Unique UI for a route
- \`loading.tsx\`: Loading UI
- \`error.tsx\`: Error UI
- \`not-found.tsx\`: 404 UI

## Layouts vs Templates

Layouts persist across navigations and maintain state. Templates create new instances on each navigation.`,
    date: "2025-01-14",
    author: "Roman Mlyuzan",
    readTime: "8 min read",
  },
  {
    id: "3",
    slug: "from-angular-to-react",
    title: "Transitioning from Angular to React",
    excerpt:
      "Key insights and pattern comparisons for Angular developers learning React.",
    content: `As an Angular developer moving to React, you'll find both similarities and significant differences.

## Component Architecture

**Angular**: Class-based with decorators
**React**: Functional components with hooks

## State Management

**Angular**: Services with RxJS and dependency injection
**React**: useState, Context API, or external libraries (Zustand, Redux)

## Data Flow

**Angular**: Two-way binding with \`[(ngModel)]\`
**React**: Unidirectional flow with controlled components

## Change Detection

**Angular**: Zone.js automatic detection
**React**: Immutable updates trigger re-renders

## Key Takeaways

React's functional approach with hooks feels more JavaScript-native. The explicit nature of state updates prevents hidden bugs but requires discipline around immutability.`,
    date: "2025-01-13",
    author: "Roman Mlyuzan",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "typescript-react-patterns",
    title: "Advanced TypeScript Patterns in React",
    excerpt:
      "Leverage TypeScript to build type-safe React applications with confidence.",
    content: `TypeScript elevates React development by catching errors at compile time and improving developer experience.

## Generic Components

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}
\`\`\`

## Discriminated Unions for Props

\`\`\`tsx
type ButtonProps =
  | { variant: 'primary'; onClick: () => void }
  | { variant: 'link'; href: string };
\`\`\`

## Utility Types

- \`Partial<T>\`: Make all properties optional
- \`Pick<T, K>\`: Select specific properties
- \`Omit<T, K>\`: Exclude specific properties
- \`Record<K, T>\`: Object with specific keys

TypeScript + React = Developer happiness.`,
    date: "2025-01-12",
    author: "Roman Mlyuzan",
    readTime: "7 min read",
  },
];

// Simulate async database operations
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllPosts(): Promise<Post[]> {
  // Simulate network delay
  await delay(100);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  await delay(50);
  return posts.find((post) => post.slug === slug);
}

export async function getAllSlugs(): Promise<string[]> {
  return posts.map((post) => post.slug);
}

// COMMENT MOCK
export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
}

const comments: Comment[] = [];

export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  await delay(50);
  return comments
    .filter((comment) => comment.postId === postId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export async function addComment(
  comment: Omit<Comment, "id" | "createdAt">
): Promise<Comment> {
  await delay(100);

  const newComment: Comment = {
    ...comment,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
  };

  comments.push(newComment);
  return newComment;
}
