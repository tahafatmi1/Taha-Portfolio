export type Certification = {
  title: string
  issuer: string
  year: string
  description: string
  mark: string
  accent: string
  badge?: string
  url?: string
}

export const certifications: Certification[] = [
  { title: 'Google AI Professional Certificate', issuer: 'Coursera', year: '2024', description: 'Applied AI foundations and responsible workflows.', mark: 'G', accent: '#4285f4' },
  { title: 'Data Analyst · SAP Analytics Cloud', issuer: 'SAP', year: '2025', description: 'Certified analytics expertise in SAP Analytics Cloud.', mark: 'SAP', accent: '#16a8e0', badge: '/certificates/sap-analytics-cloud.png' },
  { title: 'SAP Generative AI Developer', issuer: 'SAP', year: 'Certified', description: 'Certified development skills for generative AI solutions in the SAP ecosystem.', mark: 'SAP AI', accent: '#16a8e0', badge: '/certificates/sap-generative-ai-developer.png' },
  { title: 'Data Analyst Professional Certificate', issuer: 'Coursera', year: '2024', description: 'Data preparation, analysis and visualization.', mark: 'IBM', accent: '#6aa9ff' },
  { title: 'Meta Front-End Developer', issuer: 'Coursera', year: '2024', description: 'Modern front-end development and React.', mark: '∞', accent: '#1689ff' },
  { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2023', description: 'Core JavaScript, algorithms and data structures.', mark: 'JS', accent: '#f5f5f0' },
  { title: 'Problem Solving (Basic)', issuer: 'HackerRank', year: '2023', description: 'Algorithmic thinking and practical problem solving.', mark: 'H', accent: '#20c779' },
]
