import './globals.css'
import { Inter } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'
import Script from 'next/script'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Green Dots',
  description: 'Easily embed GitHub contribution graphs in your apps.',
}

const bricolageFont = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '800',
  variable: '--font-rum_raisin',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${bricolageFont.variable} min-h-screen bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer /> 

        <Script 
          src="https://umami.zenex.dev/script.js"
          strategy="afterInteractive"
          data-website-id="45e542fd-0317-4499-b712-42749694cbd9"
        />
      </body>
    </html>
  )
}