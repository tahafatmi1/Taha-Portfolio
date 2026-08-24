import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './ui'

export function Projects() {
  return (
    <section id="projects" className="content-section section-shell projects">
      <SectionHeading eyebrow="Selected projects" title="FEATURED WORK" copy="A selection of my recent projects." />
      <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
      <p className="asset-note">Live links and repository links can be connected when you share them.</p>
    </section>
  )
}
