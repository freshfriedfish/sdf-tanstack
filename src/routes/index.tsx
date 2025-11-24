import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { WorkSection } from '@/components/WorkSection'
import { Tech } from '@/components/Tech'


function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="md:flex md:items-start md:gap-8 md:max-w-7xl md:mx-auto">
        <Header />
        <div className="md:flex-1">
          <WorkSection />
          <Tech />
          
          {/* Blog Link Section */}
          <div className="mt-8 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
            <p className="text-gray-600 mb-4">Check out our blog for tutorials and updates</p>
            <Link 
              to="/blog" 
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Visit Blog →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
