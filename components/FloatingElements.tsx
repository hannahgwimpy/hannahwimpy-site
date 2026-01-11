"use client"

import { motion } from 'framer-motion'
import * as React from 'react'

export default function FloatingElements() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = React.useState(false)

  React.useLayoutEffect(() => {
    const isTouchEnv = (() => {
      if (typeof window === 'undefined') return false
      const mm = (q: string) => window.matchMedia && window.matchMedia(q).matches
      const coarse = mm('(pointer: coarse)')
      const noHover = mm('(hover: none)')
      const touchPoints = (navigator as any).maxTouchPoints && (navigator as any).maxTouchPoints > 0
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
      const isiOS = /iPad|iPhone|iPod/.test(ua) || (ua.includes('Macintosh') && (navigator as any).maxTouchPoints > 1)
      const smallViewport = window.innerWidth < 1400
      const hasOntouch = 'ontouchstart' in window
      return coarse || noHover || touchPoints || hasOntouch || isiOS || smallViewport
    })()
    setEnabled(!isTouchEnv)
  }, [])

  React.useEffect(() => {
    if (!enabled) return
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth
      const y = (e.clientY - innerHeight / 2) / innerHeight
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled])

  const parallax = (mult = 1) => ({
    transform: `translate3d(${mouse.x * 40 * mult}px, ${mouse.y * 40 * mult}px, 0)`,
    transition: 'transform 120ms linear',
  })

  if (!enabled) return null

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden hide-on-touch">
      {/* large soft blobs */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{ background: 'radial-gradient(closest-side, var(--accent-primary), transparent)', ...parallax(0.6) }}
        animate={{ x: [0, 50, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-10 top-20 w-56 h-56 rounded"
        style={{ background: 'radial-gradient(closest-side, var(--accent-secondary), transparent)', ...parallax(-0.4) }}
        animate={{ x: [0, -60, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full"
        style={{ background: 'radial-gradient(closest-side, var(--accent-hover), transparent)', ...parallax(0.8) }}
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* additional floating dots */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 29) % 100}%`,
            background: 'var(--accent-primary)',
            opacity: 0.25,
            ...parallax((i % 5) * 0.05 - 0.1),
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: (i % 7) * 0.2 }}
        />
      ))}
    </div>
  )
}
