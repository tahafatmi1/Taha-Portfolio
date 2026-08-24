import { SectionHeading } from './ui'
import { SkillTabs } from './SkillTabs'

export function Skills() {
  return (
    <section id="skills" className="content-section section-shell skills">
      <SectionHeading eyebrow="Capabilities" title="SKILLS & TOOLS" copy="Web development first—supported by practical experience across AI, data and enterprise technology." />
      <SkillTabs />
    </section>
  )
}

