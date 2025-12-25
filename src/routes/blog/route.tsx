import { createFileRoute, Outlet } from '@tanstack/react-router'

function BlogLayout() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/blog')({
  component: BlogLayout,
})
