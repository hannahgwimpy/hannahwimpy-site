"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const linkClass = (path: string) =>
    `px-2 py-1 transition-colors ${pathname === path ? 'text-accent-primary' : 'text-text-secondary hover:text-accent-hover'}`

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto container-max px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-base font-medium tracking-wide hover:text-accent-hover">HANNAH WIMPY</Link>
        <nav className="flex items-center gap-3 text-base uppercase">
          <Link href="/" className={linkClass('/')}>~</Link>
          <Link href="/about" className={linkClass('/about')}>about</Link>
          <Link href="/work" className={linkClass('/work')}>work</Link>
          <Link href="/blog" className={linkClass('/blog')}>blog</Link>
        </nav>
      </div>
    </header>
  )
}
