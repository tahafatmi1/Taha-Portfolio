import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  useEffect(() => {
    const update = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', update, { passive: true })
    return () => window.removeEventListener('mousemove', update)
  }, [])
  return position
}
