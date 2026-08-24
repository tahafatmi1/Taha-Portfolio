import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer section-shell">
      <p>© 2026 {profile.name}. All rights reserved.</p>
      <p>Built with React and lots of coffee.</p>
      <div className="footer-socials">
        {profile.social.github && <a href={profile.social.github} aria-label="GitHub"><Github /></a>}
        {profile.social.linkedin && <a href={profile.social.linkedin} aria-label="LinkedIn"><Linkedin /></a>}
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP <ArrowUp /></button>
    </footer>
  )
}

