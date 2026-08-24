import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 800, damping: 45 })
  const smoothY = useSpring(y, { stiffness: 800, damping: 45 })
  const [label, setLabel] = useState('')
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (min-width: 900px) and (prefers-reduced-motion: no-preference)')
    setEnabled(media.matches)
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY) }
    const over = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      const value = target?.dataset.cursor
      setLabel(value === 'view' ? 'VIEW' : value === 'explore' ? 'EXPLORE' : value === 'link' ? '↗' : '')
    }
    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over) }
  }, [x, y])

  if (!enabled) return null
  return <motion.div className={`custom-cursor ${label ? 'active' : ''}`} style={{ x: smoothX, y: smoothY }} aria-hidden="true"><span>{label}</span></motion.div>
}

