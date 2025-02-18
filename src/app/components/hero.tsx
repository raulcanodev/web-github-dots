import Link from 'next/link';
import { Zap, Star } from 'lucide-react';
import Image from "next/image"

export default function Hero() {
  return (
    <section className="container flex flex-col items-center text-center px-4 pt-20 sm:pt-32 m-auto">
<a 
  href="https://www.producthunt.com/posts/green-dots?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-green&#0045;dots" 
  target="_blank"
  rel="noopener noreferrer"
>
  <Image 
    src="/peerlist.svg" 
    alt="Green Dots - GitHub-style contribution graphs for your React projects" 
    style={{
      width: '250px',
      height: '54px'
    }}
    width={250}
    height={54}
    className='mb-8'
  />
</a>
      <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 sm:px-4 py-1 text-xs sm:text-sm text-emerald-300">
        <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
        🎉 Just launched: v1.1 is here
      </div>

      <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
        GitHub contribution graphs{' '}
        <span className="relative inline-flex items-center rounded bg-emerald-500/10 px-3 sm:px-6 py-1 sm:py-2 text-emerald-400">
          for React
          <div className="absolute -inset-px -z-10 rounded border border-emerald-500/20" />
        </span>
      </h1>

      <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-xl text-neutral-400">
        Showcase your coding journey with stunning contribution graphs. The way
        to visualize your GitHub activity and make your portfolio stand out.
      </p>

      <div className="w-full max-w-full sm:max-w-xl mx-auto overflow-hidden">
        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <div className="rounded-lg border border-neutral-800 bg-black px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm text-neutral-400 overflow-x-auto whitespace-nowrap">
            npm i @raulcanodev/react-github-dots
          </div>
        </div>
      </div>

      <Link
        href="https://github.com/raulcanodev/react-github-dots"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-lg border border-neutral-800 px-4 mt-6 sm:mt-8 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 transition-colors">
        <Star className="h-4 w-4 text-emerald-500 group-hover:fill-emerald-500 transition-colors" />
        Star on GitHub
      </Link>
    </section>
  );
}