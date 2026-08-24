import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { MouseEvent, PropsWithChildren, ReactNode } from 'react'

export function SectionLabel({ children }: PropsWithChildren) {
  return <div className="section-label"><span />{children}</div>
}

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow: string; title: string; copy?: string; action?: ReactNode }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      <SectionLabel>{eyebrow}</SectionLabel>
      <div className="section-title-row">
        <h2>{title}</h2>
        <div className="section-heading-aside">
          {copy && <p>{copy}</p>}
          {action}
        </div>
      </div>
    </motion.div>
  )
}

export function MagneticLink({ href, children, variant = 'primary', download, target, ariaLabel }: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  download?: boolean
  target?: string
  ariaLabel?: string
}) {
  const reduced = useReducedMotion()
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || window.innerWidth < 900) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8
    event.currentTarget.style.transform = `translate(${x}px, ${y}px)`
  }
  const reset = (event: MouseEvent<HTMLAnchorElement>) => { event.currentTarget.style.transform = '' }
  return (
    <a
      className={`magnetic-button ${variant}`}
      href={href}
      download={download}
      target={target}
      rel={target ? 'noreferrer' : undefined}
      onMouseMove={move}
      onMouseLeave={reset}
      aria-label={ariaLabel}
      data-cursor="link"
    >
      <span>{children}</span><ArrowUpRight size={17} />
    </a>
  )
}
