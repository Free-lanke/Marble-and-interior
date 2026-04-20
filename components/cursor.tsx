'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.3 })
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    const els = document.querySelectorAll('[data-cursor]')
    els.forEach(el => {
      el.addEventListener('mouseenter', () => { setHovering(true); setLabel(el.getAttribute('data-cursor') || '') })
      el.addEventListener('mouseleave', () => { setHovering(false); setLabel('') })
    })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
    >
      <motion.div
        animate={{ scale: hovering ? 1 : 0.35, opacity: hovering ? 1 : 0.85 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a1a1a] text-[#f5f1e8] flex items-center justify-center"
        style={{ width: 88, height: 88 }}
      >
        <span className="text-[10px] uppercase tracking-[0.18em] font-sans">{label || '•'}</span>
      </motion.div>
    </motion.div>
  )
}
