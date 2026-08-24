import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Certification } from '../data/certifications'

export function CertificationCard({ certification }: { certification: Certification }) {
  const content = (
    <>
      <div className={`cert-mark ${certification.badge ? 'has-badge' : ''} ${certification.badgeVariant === 'logo' ? 'logo-badge' : ''}`} style={{ color: certification.accent }}>
        {certification.badge ? <img src={certification.badge} alt={`${certification.title} certification badge`} /> : certification.mark}
      </div>
      <h3>{certification.title}</h3>
      <p>{certification.description}</p>
      <div className="cert-meta">
        <span>{certification.issuer} · {certification.year}</span>
        {certification.url ? <ArrowUpRight size={17} /> : <span className="badge-ready">BADGE READY</span>}
      </div>
    </>
  )

  return (
    <motion.article className="cert-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
      {certification.url ? <a href={certification.url} target="_blank" rel="noreferrer">{content}</a> : <div className="cert-inner">{content}</div>}
    </motion.article>
  )
}
