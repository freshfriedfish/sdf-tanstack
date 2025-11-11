import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { WorkSection } from '@/components/WorkSection'

function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="md:flex md:items-start md:gap-8 md:max-w-6xl md:mx-auto">
        <Header />
        <WorkSection />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
