import { createFileRoute, Link } from '@tanstack/react-router'

function BlogPage() {
  return (
    <div className="min-h-screen">
      <header className="px-4 py-6">
        <Link to="/" className="text-sm transition-colors">
          home
        </Link>
      </header>
    </div>
  )
}

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})
