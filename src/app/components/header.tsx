import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-500" />
          <span className="text-lg font-semibold">react-github-dots</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/docs" className="text-sm text-neutral-400 hover:text-white">
            Docs
          </Link>
          <Link href="/playground" className="text-sm text-neutral-400 hover:text-white">
            Playground
          </Link>
          <Link href="/guides" className="text-sm text-neutral-400 hover:text-white">
            Guides
          </Link>
          <Link href="/blog" className="text-sm text-neutral-400 hover:text-white">
            Blog
          </Link>
          <Link
            href="https://github.com/yourusername/react-github-dots"
            className="text-neutral-400 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
