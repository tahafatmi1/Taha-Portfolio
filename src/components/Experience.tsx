import { motion } from 'framer-motion'
import { BriefcaseBusiness, Plus } from 'lucide-react'
import { useState } from 'react'
import { experience } from '../data/experience'
import { SectionHeading } from './ui'

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null)
  return (
    <section id="experience" className="content-section section-shell experience">
      <SectionHeading eyebrow="Career path" title="EXPERIENCE" copy="Practical experience across web development, enterprise systems and data." />
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article key={item.company} className={`timeline-item ${expanded === index ? 'expanded' : ''}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <div className="timeline-marker"><BriefcaseBusiness /></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-copy"><p>{item.role}</p><h3>{item.company}</h3><motion.div animate={{ height: expanded === index ? 'auto' : 0, opacity: expanded === index ? 1 : 0 }} className="timeline-note">{item.note}</motion.div></div>
            <button onClick={() => setExpanded(expanded === index ? null : index)} aria-label={`${expanded === index ? 'Collapse' : 'Expand'} ${item.company}`} aria-expanded={expanded === index}><motion.span animate={{ rotate: expanded === index ? 45 : 0 }}><Plus /></motion.span></button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
