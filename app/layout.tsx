import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import CursorDot from '@/components/CursorDot'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'hannah wimpy',
  description: 'building physical ai. exited founder. comp. biophysics @ northeastern.',
  openGraph: {
    title: 'hannah wimpy',
    description: 'building physical ai. exited founder. comp. biophysics @ northeastern.',
    images: ['/og.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.className}>
      <head>
        <script defer data-domain="hannahwimpy.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="min-h-screen antialiased">
        <FloatingElements />
        <CursorDot />
        <Nav />
        <main className="container mx-auto container-max px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
