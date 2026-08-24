import { motion } from 'framer-motion'
import { Stats } from './Stats'
import { SectionLabel } from './ui'

export function About() {
  return (
    <section id="about" className="content-section section-shell about">
      <motion.div className="about-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
        <SectionLabel>About me</SectionLabel>
        <h2>I build with <span>code.</span><br />I solve with <span>logic.</span><br />I create with <span>purpose.</span></h2>
        <p>I&apos;m a Computer Science student and web developer based in Karachi who enjoys building thoughtful digital experiences. I work with modern web technologies, with AI, data, automation and enterprise systems supporting the products I create.</p>
      </motion.div>
      <Stats />
    </section>
  )
}
