export type Project = {
  title: string
  category: string
  technologies: string[]
  description: string
  liveUrl?: string
  githubUrl?: string
  image?: string
  images?: string[]
  visual?: 'crm' | 'chatbot' | 'claims' | 'analytics'
}

const pinnedProject: Project = {
  title: 'Uptown Dance & Fitness Booking Platform',
  category: 'Custom WordPress Platform',
  technologies: ['Custom WordPress Plugin', 'PHP & MySQL', 'JavaScript & AJAX', 'Stripe API', 'Booking Logic', 'Email Automation'],
  description:
    'A custom booking, membership and payment platform built entirely inside WordPress. It centralizes class scheduling, credits and booking rules, capacity and waitlist management, attendance, member resources, role-based access, Stripe subscriptions, billing and automated emails, with CRM and Zapier integration readiness.',
  liveUrl: 'https://cloneuptown.cwdezigns.com/',
  images: [
    '/projects/uptown-dance-homepage.png',
    '/projects/uptown-admin-dashboard.png',
    '/projects/uptown-member-dashboard.png',
  ],
}

export const projects: Project[] = [
  pinnedProject,
  {
    title: 'Eurobahn Collision Center',
    category: 'Featured Website',
    technologies: ['Responsive Design', 'Lead Generation', 'Service Website'],
    description: 'A conversion-focused collision repair website showcasing services, insurance assistance, emergency towing and estimate requests.',
    liveUrl: 'https://eurobahncollisioninc.com/',
    image: '/projects/eurobahn-collision-center.png',
  },
  {
    title: 'Global Partnerships Forum',
    category: 'Featured Website',
    technologies: ['WordPress', 'Elementor', 'Responsive Design'],
    description:
      'A multi-page nonprofit platform presenting global initiatives, leadership, partnerships and mission-driven engagement.',
    liveUrl: 'https://gpf.cwdezigns.website/',
    images: [
      '/projects/gpf-homepage.png',
      '/projects/gpf-vision-for-the-future.png',
      '/projects/gpf-about-us.png',
    ],
  },
  {
    title: 'Contour Cabinets RTA',
    category: 'Featured E-commerce Website',
    technologies: ['WordPress', 'WooCommerce', 'Elementor'],
    description:
      'A full e-commerce experience for ready-to-assemble cabinetry, featuring extensive product categories, filtering, product variations and consultation-focused content.',
    liveUrl: 'https://contourcabinetsrta.com/',
    images: [
      '/projects/contour-cabinets-homepage.png',
      '/projects/contour-cabinets-shop.png',
    ],
  },
  {
    title: 'Zion Construction',
    category: 'Featured Website',
    technologies: ['WordPress', 'Elementor', 'Responsive Design'],
    description:
      'A bold, conversion-focused construction website presenting custom home and ADU services, project credibility, testimonials and quote generation.',
    liveUrl: 'https://zionconstruction.cwdezigns.com/',
    image: '/projects/zion-construction-homepage.png',
  },
  {
    title: 'JS Garden Works LLC',
    category: 'Featured Website',
    technologies: ['WordPress', 'Elementor', 'Responsive Design'],
    description:
      'A nature-inspired landscaping website showcasing garden design, maintenance services, project benefits, customer testimonials and estimate generation.',
    liveUrl: 'https://jsgardenworksllc.com/',
    image: '/projects/js-garden-works-homepage.png',
  },
  {
    title: '5 Collision Guys Tampa',
    category: 'Featured Website',
    technologies: ['WordPress', 'Elementor', 'Lead Generation'],
    description:
      'A high-impact auto body repair website featuring collision services, trust signals, customer reviews, FAQs and conversion-focused contact pathways.',
    liveUrl: 'https://5collisionguystampa.co/',
    image: '/projects/5-collision-guys-tampa-homepage.png',
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
    liveUrl: 'https://www.crash-claim.org/',
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
