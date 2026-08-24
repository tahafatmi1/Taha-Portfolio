import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { certifications } from '../data/certifications'
import { CertificationCard } from './CertificationCard'
import { SectionHeading } from './ui'

export function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null)
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * 280, behavior: 'smooth' })

  const controls = (
    <div className="section-controls" aria-label="Certification carousel controls">
      <button onClick={() => move(-1)} aria-label="Previous certificates"><ArrowLeft /></button>
      <button onClick={() => move(1)} aria-label="Next certificates"><ArrowRight /></button>
    </div>
  )

  return (
    <section id="certifications" className="content-section section-shell certifications">
      <SectionHeading eyebrow="Credentials" title="CERTIFICATIONS" copy="Verified learning across web, AI, data and enterprise tools." action={controls} />
      <div className="cert-track" ref={trackRef}>
        {certifications.map((certification) => <CertificationCard key={certification.title} certification={certification} />)}
      </div>
      <p className="asset-note">Badge artwork and credential links can be connected as soon as you share them.</p>
    </section>
  )
}

