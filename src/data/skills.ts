export type SkillCategory = {
  id: string
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { id: 'web', label: 'Web Development', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PHP', 'WordPress', 'Git', 'GitHub', 'Docker', 'Vite', 'Figma'] },
  { id: 'ai', label: 'AI & Automation', skills: ['OpenAI', 'Generative AI', 'LLMs', 'Prompt Engineering', 'LangChain', 'AI Chatbots', 'AI Automation', 'APIs'] },
  { id: 'data', label: 'Data & Analytics', skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Data Visualization', 'Data Cleaning', 'SAP Analytics Cloud'] },
  { id: 'sap', label: 'SAP & Business Tech', skills: ['SAP Analytics Cloud', 'SAP MDM', 'Business Intelligence', 'CRM', 'Enterprise Systems'] },
]
