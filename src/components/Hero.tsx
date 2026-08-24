import { motion } from 'framer-motion'
import { Download, Github, ImagePlus, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { MagneticLink } from './ui'

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

function Portrait() {
  return (
    <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.55 }} data-cursor="explore">
      <div className="frame-corner corner-a" /><div className="frame-corner corner-b" />
      <div className="portrait-grid" />
      {profile.portrait ? (
        <img className="portrait-image" src={profile.portrait} alt={`${profile.name}, ${profile.role}`} />
      ) : (
        <div className="portrait-placeholder" role="img" aria-label={`Portrait slot for ${profile.name}`}>
          <div className="portrait-monogram">{profile.initials}</div>
          <p><ImagePlus size={14} /> PORTRAIT READY</p>
          <span>Your photo will appear here</span>
        </div>
      )}
      <div className="tech-label label-a">PORT—01</div>
      <div className="tech-label label-b">24.8607 / 67.0011</div>
      <div className="availability"><span>STATUS</span><strong>{profile.availability.toUpperCase()} <i /></strong></div>
      <div className="portrait-code"><em>&lt;code&gt;</em> I turn ideas into interactive digital solutions. <em>&lt;/code&gt;</em></div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}>
        <motion.div variants={reveal} className="hero-kicker">HELLO, I&apos;M</motion.div>
        <div className="name-mask"><motion.h1 variants={reveal}>TAHA <span>FATMI.</span></motion.h1></div>
        <motion.p variants={reveal} className="hero-role">WEB DEVELOPER</motion.p>
        <motion.div variants={reveal} className="orange-rule" />
        <motion.p variants={reveal} className="hero-description">I build modern websites and web applications with clean code, thoughtful design and exceptional user experiences. I also work with AI, data and automation to create smarter digital solutions.</motion.p>
        <motion.div variants={reveal} className="hero-actions">
          <MagneticLink href="#projects">VIEW MY WORK</MagneticLink>
          {profile.cv ? (
            <a className="download-button" href={profile.cv} download data-cursor="link">DOWNLOAD CV <Download size={16} /></a>
          ) : (
            <a className="download-button" href={`mailto:${profile.email}?subject=CV request`} data-cursor="link">REQUEST CV <Download size={16} /></a>
          )}
        </motion.div>
        <motion.div variants={reveal} className="social-row">
          {profile.social.github ? <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-cursor="link"><Github /></a> : <span className="social-pending" title="GitHub profile ready to connect"><Github /></span>}
          {profile.social.linkedin ? <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor="link"><Linkedin /></a> : <span className="social-pending" title="LinkedIn profile ready to connect"><Linkedin /></span>}
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`} data-cursor="link"><Mail /></a>
        </motion.div>
      </motion.div>
      <Portrait />
      <div className="scroll-cue" aria-hidden="true"><span>SCROLL DOWN</span><i /></div>
    </section>
  )
}

