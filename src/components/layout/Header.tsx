import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/#services', label: 'Services' },
  { to: '/#realisations', label: 'Réalisations' },
  { to: '/#a-propos', label: 'À propos' },
  { to: '/#temoignages', label: 'Avis' },
  { to: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-[#2B2A29]/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={scrolled ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
            alt="IBO Carrelage"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                scrolled
                  ? 'text-[#2B2A29] hover:text-[#E31E24]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <NavLink
            to="/devis"
            className="bg-[#E31E24] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#C41A1F] transition-colors duration-300 shadow-md"
          >
            Devis gratuit
          </NavLink>
        </nav>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-[#2B2A29]' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#2B2A29] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-white/80 hover:text-white text-sm font-medium uppercase tracking-wide py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <NavLink
              to="/devis"
              className="bg-[#E31E24] text-white px-6 py-3 rounded-lg text-sm font-semibold text-center hover:bg-[#C41A1F] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Devis gratuit
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
