import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { MagneticLink, SectionLabel } from './ui'

export function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <div className="contact-copy">
        <SectionLabel>Let&apos;s work together</SectionLabel>
        <h2>Have a project in mind?<br />Let&apos;s build something <span>amazing.</span></h2>
        <MagneticLink href={`mailto:${profile.email}`}>GET IN TOUCH</MagneticLink>
      </div>
      <div className="contact-details">
        <a href={`mailto:${profile.email}`}><Mail /> <span><small>Email</small>{profile.email}</span></a>
        {profile.social.linkedin ? <a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Linkedin /> <span><small>LinkedIn</small>View profile</span></a> : <div className="detail-pending"><Linkedin /> <span><small>LinkedIn</small>Ready to connect</span></div>}
        {profile.social.github ? <a href={profile.social.github} target="_blank" rel="noreferrer"><Github /> <span><small>GitHub</small>View profile</span></a> : <div className="detail-pending"><Github /> <span><small>GitHub</small>Ready to connect</span></div>}
        <div><MapPin /> <span><small>Location</small>{profile.location}</span></div>
      </div>
      <div className="contact-orbit" aria-hidden="true"><i /><i /><i /><span>{profile.initials}</span></div>
    </section>
  )
}

