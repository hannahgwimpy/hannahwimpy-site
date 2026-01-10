"use client"

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorDot() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useMotionValue(1)
  const [pulseId, setPulseId] = React.useState(0)

  const sx = useSpring(x, { stiffness: 400, damping: 40 })
  const sy = useSpring(y, { stiffness: 400, damping: 40 })
  const sScale = useSpring(scale, { stiffness: 300, damping: 30 })

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const down = () => { scale.set(1.6); setPulseId((n) => n + 1) }
    const up = () => scale.set(1)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [x, y, scale])

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]">
      {/* outer glow */}
      <motion.div
        style={{ translateX: sx, translateY: sy, scale: sScale }}
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
        style={{ translateX: sx, translateY: sy }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border"
      />
      {/* inner core */}
      <motion.div
        style={{ translateX: sx, translateY: sy, scale: sScale }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
      >
        <div className="w-full h-full rounded-full opacity-90" style={{ background: 'var(--accent-primary)' }} />
      </motion.div>
    </div>
  )
}
