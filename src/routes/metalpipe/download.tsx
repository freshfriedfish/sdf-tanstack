import { createFileRoute } from '@tanstack/react-router'

function MetalPipeAppPage() {
  return (
    <div className="min-h-screen bg-radial-blue h-full mx-auto flex flex-col justify-start items-center gap-8 p-4">
      <h1 className="bg-linear-to-r from-gray-300 to-gray-600 bg-clip-text text-5xl font-bold text-transparent">
        Metal Pipe
      </h1>
    </div>
  )
}

export const Route = createFileRoute('/metalpipe/download')({
  component: MetalPipeAppPage,
})

