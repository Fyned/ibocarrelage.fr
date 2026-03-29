import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import DevisSidebar from '../ui/DevisSidebar'
import { useDevis } from '../../hooks/useDevis'

const navLinks = [
  { to: '/#services', label: 'Services' },
  { to: '/#realisations', label: 'Réalisations' },
  { to: '/#a-propos', label: 'À propos' },
  { to: '/#temoignages', label: 'Avis' },
  { to: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { open: devisOpen, openDevis, closeDevis } = useDevis()
  const lastScrollY = useRef(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - lastScrollY.current

    if (latest < 80) {
      setScrolled(false)
      setHidden(false)
    } else {
      setScrolled(true)
      if (diff > 8) setHidden(true)
      if (diff < -5) setHidden(false)
    }

    lastScrollY.current = latest
  })

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-black/5'
            : 'bg-transparent'
        }`}
        initial={false}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex items-center shrink-0">
              <motion.img
                src={scrolled && !menuOpen ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
                alt="IBO Carrelage"
                className="h-14 md:h-[4.5rem] w-auto"
                initial={false}
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 rounded-lg group ${
                    scrolled
                      ? 'text-[#2B2A29]/70 hover:text-[#2B2A29]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      scrolled ? 'bg-[#E31E24]' : 'bg-white'
                    }`}
                  />
                </a>
              ))}

              <div className={`w-px h-6 mx-3 ${scrolled ? 'bg-black/10' : 'bg-white/20'}`} />

              <button
                onClick={() => openDevis()}
                className="group flex items-center gap-2 bg-[#E31E24] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#C41A1F] transition-all duration-300 shadow-lg shadow-[#E31E24]/25 hover:shadow-xl hover:shadow-[#E31E24]/30 hover:scale-[1.02] cursor-pointer"
              >
                Devis gratuit
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[7px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <motion.span
                className={`block w-7 h-[2.5px] rounded-full origin-center ${
                  menuOpen || !scrolled ? 'bg-white' : 'bg-[#2B2A29]'
                }`}
                animate={menuOpen ? { rotate: 45, y: 9.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.span
                className={`block w-7 h-[2.5px] rounded-full ${
                  menuOpen || !scrolled ? 'bg-white' : 'bg-[#2B2A29]'
                }`}
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`block w-7 h-[2.5px] rounded-full origin-center ${
                  menuOpen || !scrolled ? 'bg-white' : 'bg-[#2B2A29]'
                }`}
                animate={menuOpen ? { rotate: -45, y: -9.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#2B2A29] flex flex-col justify-center"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="max-w-lg mx-auto px-8 w-full">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.to}
                      className="block text-white text-4xl sm:text-5xl font-bold py-3 hover:text-[#E31E24] transition-colors duration-200 tracking-tight"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="mt-10"
              >
                <button
                  className="inline-flex items-center gap-3 bg-[#E31E24] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-[#E31E24]/30 hover:bg-[#C41A1F] transition-colors cursor-pointer"
                  onClick={() => { setMenuOpen(false); setTimeout(() => openDevis(), 400) }}
                >
                  Devis gratuit
                  <ArrowRight size={20} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-white/40 text-sm">Chambéry, Savoie (73)</p>
                <a
                  href="https://instagram.com/ibocarrelage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-[#E31E24] transition-colors mt-1 inline-block"
                >
                  @ibocarrelage
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Devis sidebar */}
      <DevisSidebar open={devisOpen} onClose={closeDevis} />
    </>
  )
}
