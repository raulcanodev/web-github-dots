import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer  from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '@raulcanodev/react-github-dots',
  description: 'Easily embed GitHub-like contribution graphs in your React apps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

