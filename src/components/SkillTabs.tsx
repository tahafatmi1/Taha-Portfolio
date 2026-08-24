import { AnimatePresence, motion } from 'framer-motion'
import { Braces, Bot, ChartNoAxesCombined, Code2, Database, Figma, GitBranch, Globe2, PanelsTopLeft, ServerCog, Sparkles, Workflow } from 'lucide-react'
import { useState } from 'react'
import { skillCategories } from '../data/skills'

const icons = [Code2, PanelsTopLeft, Braces, GitBranch, Globe2, ServerCog, Database, Figma, Bot, Sparkles, ChartNoAxesCombined, Workflow]

export function SkillTabs() {
  const [active, setActive] = useState(skillCategories[0].id)
  const category = skillCategories.find((item) => item.id === active) ?? skillCategories[0]
  return (
    <div className="skills-panel">
      <div className="skill-tabs" role="tablist" aria-label="Skill categories">
        {skillCategories.map((item) => <button key={item.id} role="tab" aria-selected={item.id === active} className={item.id === active ? 'active' : ''} onClick={() => setActive(item.id)}>{item.label}</button>)}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} className="skill-grid" role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
          {category.skills.map((skill, index) => {
            const Icon = icons[index % icons.length]
            return <motion.div className="skill-item" key={skill} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.018 }}><Icon /><span>{skill}</span></motion.div>
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
