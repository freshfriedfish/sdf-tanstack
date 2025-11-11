import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="px-4 py-6 md:flex-shrink-0 md:pt-40 md:sticky md:top-0 md:pr-24">
      <div className="mx-auto max-w-7xl md:max-w-none">
        <div className="flex items-center justify-between md:flex-col md:items-start md:gap-6">
          {/* intro */}
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold">
              Shaf
            </h1>
            <p className="mt-1 text-sm italic">
              I like to write code for the web
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3">
            <Link
              to="/blog"
              className="transition-colors"
            >
              /blog
            </Link>
            <a
              href="https://x.com/ferrororo"
              className="transition-colors"
            >
              @ferrororo
            </a>
            <a
              href="https://github.com/freshfriedfish"
              className="transition-colors"
            >
              freshfriedfish
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

