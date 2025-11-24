// Single source of truth for blog posts
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with TanStack Router',
    excerpt: 'Learn the basics of TanStack Router and file-based routing.',
    date: '2024-01-15',
    author: 'Dev Team',
    content: `
TanStack Router is a powerful routing solution for React applications. 
It provides type-safe routing with excellent developer experience.

Key features include:
- File-based routing
- Type-safe navigation
- Built-in data loading
- Code splitting support

This is just a simple example to demonstrate dynamic routing.
    `.trim(),
  },
  {
    id: 'dynamic-routing',
    title: 'Mastering Dynamic Routes',
    excerpt: 'Deep dive into dynamic routing patterns and best practices.',
    date: '2024-01-20',
    author: 'Dev Team',
    content: `
Dynamic routes allow you to create flexible URL patterns that match multiple paths.

In TanStack Router, you use the $ prefix to denote dynamic segments:
- blog.$postId.tsx matches /blog/:postId
- The postId parameter is automatically typed and available

This makes building scalable applications much easier.
    `.trim(),
  },
]

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getAllPostPreviews() {
  return blogPosts.map(({ id, title, excerpt, date }) => ({
    id,
    title,
    excerpt,
    date,
  }))
}

