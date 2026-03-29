import { Link } from 'react-router-dom'
import { MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2B2A29] text-white/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src="/images/logo-dark.svg"
              alt="IBO Carrelage"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Artisan carreleur à Chambéry, Savoie.<br />
              Passionné par les beaux projets.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Navigation</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {['Services', 'Réalisations', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace('à ', '').replace(' ', '-')}`}
                    className="text-white/60 hover:text-[#E31E24] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/devis" className="text-white/60 hover:text-[#E31E24] transition-colors">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#E31E24]" />
                243 rue de Gonrat Bassens<br />73000 Chambéry, France
              </li>
              <li>
                <a
                  href="https://instagram.com/ibocarrelage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-[#E31E24] transition-colors"
                >
                  <Instagram size={16} />
                  @ibocarrelage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} IBO Carrelage. Tous droits réservés.</p>
          <p>Site réalisé par <span className="text-white/60">DMC Kreatif</span></p>
        </div>
      </div>
    </footer>
  )
}
