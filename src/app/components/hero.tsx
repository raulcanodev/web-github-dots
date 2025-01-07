import Link from 'next/link';
import { Zap, Star } from 'lucide-react';
// import CopyButton from '@/utils/CopyButton';

export default function Hero() {
  return (
    <section className="container flex flex-col items-center text-center px-4 pt-32 m-auto">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300">
        <Zap className="h-4 w-4" />
        🎉 Just launched: react-github-dots v1.1 is here
      </div>

      <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
        GitHub contribution graphs{' '}
        <span className="relative inline-flex items-center rounded bg-emerald-500/10 px-6 py-2 text-emerald-400">
          for React
          <div className="absolute -inset-px -z-10 rounded border border-emerald-500/20" />
        </span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-xl text-neutral-400">
        Showcase your coding journey with stunning contribution graphs. The way
        to visualize your GitHub activity and make your portfolio stand out.
      </p>

      <div className="flex justify-center w-full">
        <div className="mt-8 flex items-center gap-4">
          <div className="rounded-lg border border-neutral-800 bg-black px-4 py-2 font-mono text-sm text-neutral-400">
            npm i @raulcanodev/react-github-dots
          </div>
        </div>
      </div>
      
      <Link
        href="https://github.com/raulcanodev/react-github-dots"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg border border-neutral-800 px-4 mt-8 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 transition-colors">
        <Star className="h-4 w-4 text-emerald-500" />
        Star on GitHub
      </Link>
    </section>
  );
}
