import { motion } from 'framer-motion'

export function Testimonial() {
  return (
    <section className="testimonial section-shell" aria-label="Design philosophy">
      <div className="flow-lines" aria-hidden="true" />
      <motion.div className="quote-mark" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>&ldquo;</motion.div>
      <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p>I believe the best digital products pair clean engineering with a thoughtful, human experience.</p>
        <footer><strong>TAHA FATMI</strong><span>DESIGN &amp; DEVELOPMENT PHILOSOPHY</span></footer>
      </motion.blockquote>
    </section>
  )
}

