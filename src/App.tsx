import { useEffect } from 'react'
import Lenis from 'lenis'
import { About } from './components/About'
import { Background } from './components/Background'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Testimonial } from './components/Testimonial'
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {
  const progress = useScrollProgress()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Background />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <Navbar />
      <main id="main">
        <Hero />
        <Certifications />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
    </>
  )
}
