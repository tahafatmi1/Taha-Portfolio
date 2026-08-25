import { portraitImage } from './imageAssets'

export const profile = {
  name: 'Taha Fatmi',
  initials: 'TF',
  role: 'Web Developer',
  location: 'Karachi, Pakistan',
  email: 'tahafatmi@gmail.com',
  contactHref: 'mailto:tahafatmi@gmail.com?subject=Portfolio%20project%20inquiry',
  availability: 'Available for opportunities',
  portrait: portraitImage('portrait-taha-v2'),
  cv: '/taha-fatmi-resume.pdf',
  social: {
    github: 'https://github.com/tahafatmi1',
    linkedin: 'https://www.linkedin.com/in/taha-fatmi/',
  },
} as const
