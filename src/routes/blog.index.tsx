import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllPostPreviews } from '@/data/blogPosts'

function BlogList() {
  const posts = Route.useLoaderData()

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <Link 
              to="/blog/$postId" 
              params={{ postId: post.id }}
              className="block"
            >
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </>
  )
}

export const Route = createFileRoute('/blog/')({
  loader: () => getAllPostPreviews(),
  component: BlogList,
})

