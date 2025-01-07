'use client';
import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [imageError, setImageError] = useState(false);

  return (
    <footer className="border-t border-neutral-800 bg-black mt-8 sm:mt-16">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
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
            <span className="text-base sm:text-lg font-semibold font-bricolage">Green Dots</span>
          </Link>
          <p className="text-center text-sm leading-loose text-neutral-400 md:text-left">
            Built by{' '}
            <Link 
              href="https://github.com/raulcanodev" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-white">
              @raulcanodev
            </Link>
            . Open source on{' '}
            <Link
              href="https://github.com/raulcanodev/react-github-dots"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-white"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/raulcanodev/react-github-dots" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white">
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://twitter.com/raulcanodev" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}