import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black mt-16">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            <span className="font-semibold">react-github-dots</span>
          </Link>
          <p className="text-center text-sm leading-loose text-neutral-400 md:text-left">
            Built by{' '}
            <Link href="https://twitter.com/yourusername" className="font-medium underline underline-offset-4">
              @raulcanodev
            </Link>
            . Open source on{' '}
            <Link
              href="https://github.com/raulcanodev/react-github-dots"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/raulcanodev/react-github-dots" className="text-neutral-400 hover:text-white">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com/raulcanodev" className="text-neutral-400 hover:text-white">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
