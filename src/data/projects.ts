export type Project = {
  title: string
  category: string
  technologies: string[]
  description: string
  liveUrl?: string
  githubUrl?: string
  visual: 'crm' | 'chatbot' | 'claims' | 'analytics'
}

export const projects: Project[] = [
  {
    title: 'Uptown Membership CRM',
    category: 'Web Development',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    description: 'Membership CRM dashboard built with WordPress and custom plugins.',
    visual: 'crm',
  },
  {
    title: 'AI Chatbot Assistant',
    category: 'AI & Automation',
    technologies: ['Python', 'OpenAI', 'LangChain'],
    description: 'Custom AI chatbot for customer support and automation.',
    visual: 'chatbot',
  },
  {
    title: 'Crash Claim Website',
    category: 'Web Application',
    technologies: ['React', 'Vite', 'TrustedForm'],
    description: 'Modern lead generation website with TrustedForm integration and responsive design.',
    visual: 'claims',
  },
  {
    title: 'SAP Analytics Cloud Dashboard',
    category: 'Data / SAP',
    technologies: ['SAP Analytics Cloud', 'Data Transformation', 'Dashboard Design'],
    description: "Analytics dashboard developed during Taha's SAP and analytics experience.",
    visual: 'analytics',
  },
]
