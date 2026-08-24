import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Bot, ChevronLeft, ChevronRight, ExternalLink, Github, LayoutDashboard } from 'lucide-react'
import type { Project } from '../data/projects'

function ProjectVisual({ type }: { type: NonNullable<Project['visual']> }) {
  if (type === 'crm') return <div className="mock crm-mock"><div className="mock-sidebar" /><div className="mock-main"><div className="mock-top" /><div className="chart-ring">74%</div><div className="bars"><i /><i /><i /><i /></div></div></div>
  if (type === 'chatbot') return <div className="mock chatbot-mock"><Bot /><div className="chat-lines"><i /><i /><i /></div><div className="chat-bubble">How can I help?</div></div>
  if (type === 'claims') return <div className="mock claims-mock"><div className="browser-bar" /><strong>YOUR CLAIM.<br /><span>OUR PRIORITY.</span></strong><div className="claim-button">START A CLAIM</div></div>
  return <div className="mock analytics-mock"><div className="analytics-head"><LayoutDashboard /> SAP ANALYTICS</div><BarChart3 /><div className="data-bars"><i /><i /><i /><i /><i /></div></div>
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const screenshots = project.images ?? (project.image ? [project.image] : [])
  const [screenshotIndex, setScreenshotIndex] = useState(0)

  const showPreviousScreenshot = () => {
    setScreenshotIndex((current) => (current - 1 + screenshots.length) % screenshots.length)
  }

  const showNextScreenshot = () => {
    setScreenshotIndex((current) => (current + 1) % screenshots.length)
  }

  return (
    <motion.article className={`project-card ${screenshots.length > 0 ? 'with-screenshot' : ''}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: (index % 2) * 0.08 }} whileHover={{ y: -7 }} data-cursor={project.liveUrl || project.githubUrl ? 'view' : undefined}>
      <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="project-visual">
        {screenshots.length > 0 ? <img key={screenshots[screenshotIndex]} className="project-screenshot" src={screenshots[screenshotIndex]} alt={`Screenshot ${screenshotIndex + 1} of ${project.title}`} loading="lazy" decoding="async" /> : project.visual ? <ProjectVisual type={project.visual} /> : null}
        {screenshots.length > 1 && (
          <div className="project-shot-controls" aria-label={`${project.title} screenshot gallery`}>
            <button type="button" onClick={showPreviousScreenshot} aria-label={`View previous ${project.title} screenshot`}><ChevronLeft size={16} /></button>
            <span aria-live="polite">{screenshotIndex + 1} / {screenshots.length}</span>
            <button type="button" onClick={showNextScreenshot} aria-label={`View next ${project.title} screenshot`}><ChevronRight size={16} /></button>
          </div>
        )}
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        {project.liveUrl && <a className="project-site-link" href={project.liveUrl} target="_blank" rel="noreferrer">VIEW WEBSITE <ExternalLink size={14} /></a>}
        {(project.githubUrl || project.liveUrl) && (
          <div className="project-links">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={16} /></a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} title="View website"><ArrowUpRight /></a>}
          </div>
        )}
      </div>
    </motion.article>
  )
}
