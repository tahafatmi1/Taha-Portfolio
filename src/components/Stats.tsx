import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Award, BriefcaseBusiness, FolderCode, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience', icon: BriefcaseBusiness },
  { value: 50, suffix: '+', label: 'Projects Completed', icon: FolderCode },
  { value: 40, suffix: '+', label: 'Happy Clients', icon: Users },
  { value: 7, suffix: '+', label: 'Certifications', icon: Award },
]

function Count({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visible = useInView(ref, { once: true })
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    if (reduced) { setCount(value); return }
    const start = performance.now()
    const duration = 700
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [visible, value, reduced])
  return <span ref={ref}>{String(count).padStart(2, '0')}{suffix}</span>
}

export function Stats() {
  return (
    <motion.div className="stats-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }}>
      {stats.map(({ value, suffix, label, icon: Icon }) => (
        <div className="stat" key={label}><Icon /><strong><Count value={value} suffix={suffix} /></strong><p>{label}</p></div>
      ))}
    </motion.div>
  )
}
