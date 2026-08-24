import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Bot, ExternalLink, Github, LayoutDashboard } from 'lucide-react'
import type { Project } from '../data/projects'

function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'crm') return <div className="mock crm-mock"><div className="mock-sidebar" /><div className="mock-main"><div className="mock-top" /><div className="chart-ring">74%</div><div className="bars"><i /><i /><i /><i /></div></div></div>
  if (type === 'chatbot') return <div className="mock chatbot-mock"><Bot /><div className="chat-lines"><i /><i /><i /></div><div className="chat-bubble">How can I help?</div></div>
  if (type === 'claims') return <div className="mock claims-mock"><div className="browser-bar" /><strong>YOUR CLAIM.<br /><span>OUR PRIORITY.</span></strong><div className="claim-button">START A CLAIM</div></div>
  return <div className="mock analytics-mock"><div className="analytics-head"><LayoutDashboard /> SAP ANALYTICS</div><BarChart3 /><div className="data-bars"><i /><i /><i /><i /><i /></div></div>
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className="project-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: (index % 2) * 0.08 }} whileHover={{ y: -7 }} data-cursor="view">
      <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="project-visual"><ProjectVisual type={project.visual} /></div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live`}><ExternalLink size={16} /></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={16} /></a>}
          <a href="#contact" aria-label={`Ask about ${project.title}`} title="Ask about this project"><ArrowUpRight /></a>
        </div>
      </div>
    </motion.article>
  )
}
