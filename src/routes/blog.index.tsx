import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllPostPreviews } from '@/data/blogPosts'

function BlogList() {
  const posts = Route.useLoaderData()

  return (
    <div>
      <div className="my-8">
        <Link to="/" className="text-primary hover:underline">
          ← Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center gap-16 py-2 text-lg">
            <time className="text-muted-foreground font-mono font-bold">{post.date}</time>
            <Link
              to="/blog/$postId"
              params={{ postId: post.id }}
              className="underline"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/blog/')({
  loader: () => getAllPostPreviews(),
  component: BlogList,
})

