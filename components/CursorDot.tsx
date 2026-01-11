"use client"

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorDot() {
  const [enabled, setEnabled] = React.useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useMotionValue(1)
  const [pulseId, setPulseId] = React.useState(0)

  const sx = useSpring(x, { stiffness: 400, damping: 40 })
  const sy = useSpring(y, { stiffness: 400, damping: 40 })
  const sScale = useSpring(scale, { stiffness: 300, damping: 30 })

  React.useEffect(() => {
    // Enable only on devices with a fine pointer (desktop/mice)
    const isFine = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: fine)').matches
    setEnabled(!!isFine)
  }, [])

  React.useEffect(() => {
    if (!enabled) return

    let raf = -1
    const move = (e: MouseEvent) => {
      const cx = e.clientX
      const cy = e.clientY
      if (raf !== -1) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        x.set(cx)
        y.set(cy)
      })
    }
    const down = () => { scale.set(1.6); setPulseId((n) => n + 1) }
    const up = () => scale.set(1)
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down, { passive: true })
    window.addEventListener('mouseup', up, { passive: true })
    return () => {
      if (raf !== -1) cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [enabled, x, y, scale])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]">
      {/* outer glow */}
      <motion.div
        style={{ translateX: sx, translateY: sy, scale: sScale, willChange: 'transform', transform: 'translateZ(0)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
      >
        <div className="w-full h-full rounded-full" style={{ filter: 'blur(10px)', background: 'radial-gradient(closest-side, var(--accent-primary), transparent)' }} />
      </motion.div>
      {/* click pulse ring */}
      <motion.div
        key={pulseId}
        initial={{ opacity: 0.35, scale: 0.8 }}
        animate={{ opacity: 0, scale: 2.2 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ translateX: sx, translateY: sy, willChange: 'transform', transform: 'translateZ(0)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border"
      />
      {/* inner core */}
      <motion.div
        style={{ translateX: sx, translateY: sy, scale: sScale, willChange: 'transform', transform: 'translateZ(0)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
      >
        <div className="w-full h-full rounded-full opacity-90" style={{ background: 'var(--accent-primary)' }} />
      </motion.div>
    </div>
  )
}
