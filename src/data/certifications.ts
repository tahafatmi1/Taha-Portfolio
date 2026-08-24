export type Certification = {
  title: string
  issuer: string
  year: string
  description: string
  mark: string
  accent: string
  badge?: string
  badgeVariant?: 'logo'
  url?: string
}

export const certifications: Certification[] = [
  { title: 'Google AI Professional Certificate', issuer: 'Coursera', year: '2024', description: 'Applied AI foundations and responsible workflows.', mark: 'G', accent: '#4285f4', badge: '/certificates/google-ai-logo.webp', badgeVariant: 'logo', url: 'https://coursera.org/share/5765a13d2b7674ea30241ce1c686d1af' },
  { title: 'Data Analytics with AI', issuer: 'Sololearn', year: '2025', description: 'Theoretical and practical foundations for applying AI to data analytics workflows.', mark: 'SL', accent: '#d84dff', badge: '/certificates/sololearn-data-analytics-with-ai.jpg', url: 'https://www.sololearn.com/certificates/CC-M146HGUA' },
  { title: 'Data Science & Analytics', issuer: 'HP LIFE', year: 'May 2025', description: 'Data science and analytics practices, methodologies, tools, and data-driven business approaches.', mark: 'HP', accent: '#0f5bd8', badge: '/certificates/hp-life-data-science-analytics.png', url: 'https://www.life-global.org/certificate/c341a948-d124-4845-926f-996f556c292c' },
  { title: 'Data Analyst · SAP Analytics Cloud', issuer: 'SAP', year: '2025', description: 'Certified analytics expertise in SAP Analytics Cloud.', mark: 'SAP', accent: '#16a8e0', badge: '/certificates/sap-analytics-cloud.png' },
  { title: 'Leveraging Advanced Features in SAP Analytics Cloud for Planning', issuer: 'SAP', year: 'Course Completion', description: 'Advanced planning features and workflows in SAP Analytics Cloud.', mark: 'SAP', accent: '#cc2478', badge: '/certificates/sap-analytics-cloud-planning.png', url: 'https://badger.learning.sap.com/verify/xomud-fobop-kamuc-dypic-nuvan' },
  { title: 'Performing Manual Planning with SAP Analytics Cloud - Course Completion', issuer: 'SAP', year: 'Course Completion', description: 'Intermediate manual planning workflows and capabilities in SAP Analytics Cloud.', mark: 'SAP', accent: '#cc2478', badge: '/certificates/sap-analytics-cloud-manual-planning.png', url: 'https://badger.learning.sap.com/verify/xymop-kygut-vifit-docov-rusat' },
  { title: 'Exploring SAP Datasphere - Course Completion', issuer: 'SAP', year: 'Course Completion', description: 'Beginner-level foundations for exploring data modeling and integration with SAP Datasphere.', mark: 'SAP', accent: '#cc2478', badge: '/certificates/sap-datasphere-course-completion.png', url: 'https://badger.learning.sap.com/verify/xydam-kyfim-tebis-gecob-lugug' },
  { title: 'Introducing SAP Business Data Cloud - Course Completion', issuer: 'SAP', year: 'Course Completion', description: 'Beginner-level foundations for SAP Business Data Cloud and its unified data capabilities.', mark: 'SAP', accent: '#cc2478', badge: '/certificates/sap-business-data-cloud-course-completion.png', url: 'https://badger.learning.sap.com/verify/xavac-kyfuc-tilar-huduh-dedir' },
  { title: 'Exploring SAP Analytics Cloud - Course Completion', issuer: 'SAP', year: 'Course Completion', description: 'Beginner-level foundations for analytics, visualization, and planning with SAP Analytics Cloud.', mark: 'SAP', accent: '#cc2478', badge: '/certificates/sap-analytics-cloud-course-completion.png', url: 'https://badger.learning.sap.com/verify/xyhig-kafod-madag-pumyt-vopod' },
  { title: 'SAP Generative AI Developer', issuer: 'SAP', year: 'Certified', description: 'Certified development skills for generative AI solutions in the SAP ecosystem.', mark: 'SAP AI', accent: '#16a8e0', badge: '/certificates/sap-generative-ai-developer.png' },
  { title: 'Data Analyst Professional Certificate', issuer: 'Coursera', year: '2024', description: 'Data preparation, analysis and visualization.', mark: 'IBM', accent: '#6aa9ff' },
  { title: 'Meta Front-End Developer', issuer: 'Coursera', year: '2024', description: 'Modern front-end development and React.', mark: '∞', accent: '#1689ff' },
  { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2023', description: 'Core JavaScript, algorithms and data structures.', mark: 'JS', accent: '#f5f5f0' },
  { title: 'Problem Solving (Basic)', issuer: 'HackerRank', year: '2023', description: 'Algorithmic thinking and practical problem solving.', mark: 'H', accent: '#20c779' },
]
