import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        @raulcanodev/react-github-dots
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Easily embed GitHub-like contribution graphs in your React apps.
      </p>
      <Link
        href="#quick-start"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Started
      </Link>
    </section>
  )
}

