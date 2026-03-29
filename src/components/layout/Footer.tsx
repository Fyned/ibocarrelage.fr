import { MapPin, Instagram, ArrowUp, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#a-propos', label: 'À propos' },
  { href: '/#temoignages', label: 'Avis clients' },
  { href: '/#contact', label: 'Contact' },
]

const services = [
  'Carrelage intérieur',
  'Salle de bain',
  'Carrelage extérieur',
  'Faïence murale',
  'Travaux neufs',
  'Rénovation',
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1918] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separator */}
        <div className="border-t border-white/5 mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo-dark.svg"
              alt="IBO Carrelage"
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Artisan carreleur à Chambéry, Savoie.
              Passionné par les beaux projets depuis plus de 10 ans.
            </p>
            <a
              href="https://instagram.com/ibocarrelage"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-white/40 hover:text-[#E31E24] transition-colors text-sm group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-[#E31E24]/10 flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </div>
              @ibocarrelage
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Nos services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-white/50 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#E31E24]" />
                </div>
                <div className="text-white/50 text-sm leading-relaxed">
                  243 rue de Gonrat Bassens<br />
                  73000 Chambéry, France
                </div>
              </li>
              <li>
                <a href="tel:+33600000000" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-[#E31E24]" />
                  </div>
                  06 XX XX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:contact@ibocarrelage.fr" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-[#E31E24]" />
                  </div>
                  contact@ibocarrelage.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} IBO Carrelage. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-white/20 text-xs">
              Site réalisé par <span className="text-white/40 hover:text-[#E31E24] transition-colors cursor-pointer">DMC Kreatif</span>
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E31E24] flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
