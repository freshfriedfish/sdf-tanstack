import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { WorkSection } from '@/components/WorkSection'
import { Tech } from '@/components/Tech'

function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="md:flex md:items-start md:gap-8 md:max-w-6xl md:mx-auto">
        <Header />
        <div className="md:flex-1">
          <WorkSection />
          <Tech />
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
