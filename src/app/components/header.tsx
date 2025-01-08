'use client';
import Link from 'next/link';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-md">
      <div className="container flex mx-auto h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            {!imageError ? (
              <Image
                src="/icon.svg"
                alt="Logo"
                width={32}
                height={32}
                priority
                onError={() => setImageError(true)}
                className="object-contain"
              />
            ) : (
              <div className="w-8 h-8 bg-emerald-400 rounded-full" />
            )}
          </div>
          <span className="text-lg font-semibold font-bricolage">Green Dots</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="https://www.npmjs.com/package/@raulcanodev/react-github-dots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white">
            NPM
          </Link>
          <Link
            href="https://github.com/raulcanodev/react-github-dots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white">
            <Github className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}