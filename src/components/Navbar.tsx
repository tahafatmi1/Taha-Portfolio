import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Send, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', close)
    }
  }, [open])

  useEffect(() => {
    const observers = navItems.map((name) => {
      const id = name.toLowerCase()
      const element = document.getElementById(id)
      if (!element) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id)
      }, { rootMargin: '-42% 0px -50%', threshold: 0 })
      observer.observe(element)
      return observer
    })
    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  const navigate = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <motion.header className={`navbar ${scrolled ? 'scrolled' : ''}`} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="nav-inner">
        <button className="brand" onClick={() => navigate('home')} aria-label="Go to home">
          <strong>TF<span>.</span></strong>
          <span className="brand-copy">TAHA FATMI<small>WEB DEVELOPER</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const id = item.toLowerCase()
            return <button key={item} className={active === id ? 'active' : ''} aria-current={active === id ? 'page' : undefined} onClick={() => navigate(id)}>{item}</button>
          })}
        </nav>
        <button className="nav-cta" onClick={() => navigate('contact')}>Let&apos;s Talk <Send size={15} /></button>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} aria-label="Mobile navigation">
            {navItems.map((item, index) => <motion.button key={item} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }} onClick={() => navigate(item.toLowerCase())}>{item}<span>0{index + 1}</span></motion.button>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
