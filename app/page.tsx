"use client"

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import SocialButtons from '@/components/SocialButtons'

const words = ['FOUNDER', 'RESEARCHER', 'OPERATOR', 'LEADER']

export default function HomePage() {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 1700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center text-center gap-6 py-16">
      <div className="text-4xl md:text-6xl tracking-tight text-accent-primary">HANNAH WIMPY</div>

      <div className="text-base text-text-secondary">Currently: Product @ Lila Sciences</div>

      <div className="h-6 relative text-text-secondary flex items-center gap-3">
        <div className="relative min-w-[8ch]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8, rotateX: -45 }}
              animate={{ opacity: 0.9, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -8, rotateX: 45 }}
              transition={{ duration: 0.35 }}
              className="will-change-transform"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>
        <span className="opacity-70">•</span>
        <div>PHYSICAL AI</div>
      </div>

      <div className="pt-2"><SocialButtons /></div>

      <div className="pt-2">
        <Link href="/work" className="text-base link">WORK →</Link>
      </div>
    </div>
  )
}
