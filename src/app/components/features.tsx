import { Paintbrush, Feather, Zap } from 'lucide-react'

const features = [
  {
    icon: Paintbrush,
    title: 'Customizable',
    description: 'Easily customize colors, sizes, and styles to match your app\'s design.',
  },
  {
    icon: Feather,
    title: 'Lightweight',
    description: 'Minimal dependencies and optimized performance for fast loading times.',
  },
  {
    icon: Zap,
    title: 'Optimized for React',
    description: 'Built with React best practices for seamless integration into your projects.',
  },
]

export default function Features() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

