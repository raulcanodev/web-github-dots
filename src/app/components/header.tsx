import Link from 'next/link';
import { Github } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
          <span className="text-lg font-semibold">Github Dots</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="https://www.npmjs.com/package/@raulcanodev/react-github-dots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white">
            NPM
          </Link>
          <Link
            href="https://github.com/raulcanodev/react-github-dots"
            className="text-neutral-400 hover:text-white">
            <Github className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
