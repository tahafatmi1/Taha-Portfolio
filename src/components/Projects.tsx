import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './ui'

export function Projects() {
  return (
    <section id="projects" className="content-section section-shell projects">
      <SectionHeading eyebrow="Selected projects" title="FEATURED WORK" copy="A selection of my recent projects." />
      <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
      <p className="asset-note project-url-note">Website addresses shown here are the latest available links. Some projects may move from temporary subdomains to their final main domains.</p>
    </section>
  )
}
