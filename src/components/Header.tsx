import { Link } from '@tanstack/react-router'
import { Newspaper } from 'lucide-react'
import { SiX, SiGithub } from 'react-icons/si'

export function Header() {
  return (
    <header className="px-4 py-6 md:flex-shrink-0 md:pt-40 md:sticky md:top-0 md:pr-24">
      <div className="mx-auto max-w-7xl md:max-w-none">
        <div className="flex items-center justify-between md:flex-col md:items-start md:gap-6">
          {/* intro */}
          <div className="flex flex-col max-w-40 md:max-w-none">
            <h1 className="text-6xl font-bold font-serif tracking-tighter">
              Shaf
            </h1>
            <p className="mt-1 md:pb-12 max-w-64">
              Software engineer interested in building scalable systems
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h2 className="hidden md:block text-2xl text-gray-300">Links</h2>
            <nav className="flex flex-col gap-3">
              <Link
                to="/blog"
                className="flex items-center gap-2 transition-colors hover:text-yellow-400"
              >
                <Newspaper className="w-4 h-4" />
                /blog
              </Link>
              <a
                href="https://x.com/ferrororo"
                className="flex items-center gap-2 transition-colors hover:text-cyan-400"
              >
                <SiX className="w-4 h-4" />
                @ferrororo
              </a>
              <a
                href="https://github.com/freshfriedfish"
                className="flex items-center gap-2 transition-colors hover:text-purple-400"
              >
                <SiGithub className="w-4 h-4" />
                freshfriedfish
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

