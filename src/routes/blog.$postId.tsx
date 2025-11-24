import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPostById } from '@/data/blogPosts'

function BlogPost() {
  const post = Route.useLoaderData()

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <time>{post.date}</time>
              <span>by {post.author}</span>
            </div>
          </header>

          <div className="prose max-w-none">
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-4">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/blog/$postId')({
  loader: ({ params }) => {
    const post = getPostById(params.postId)
    if (!post) {
      throw notFound()
    }
    return post
  },
  component: BlogPost,
  notFoundComponent: NotFoundComponent,
})

