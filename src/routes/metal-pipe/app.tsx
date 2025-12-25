import { createFileRoute } from '@tanstack/react-router'

function MetalPipeAppPage() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Metal Pipe App</h1>
        <p>Metal Pipe App page content</p>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/metal-pipe/app')({
  component: MetalPipeAppPage,
})

