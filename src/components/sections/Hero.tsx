import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Star } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: 'url(/images/hero-bg.webp)', y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B2A29]/80 via-[#2B2A29]/60 to-[#2B2A29]/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.p
          className="text-[#E31E24] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Votre Artisan Carreleur à Chambéry
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-3xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Des sols et murs<br />
          <span className="text-[#E31E24]">d'exception</span>
        </motion.h1>

        <motion.p
          className="text-white/75 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Spécialiste en pose de carrelage, rénovation de salle de bain et travaux neufs
          dans toute la Savoie. Passionné par les beaux projets depuis plus de 10 ans.
        </motion.p>

        <motion.div
          className="flex flex-col xs:flex-row gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/devis"
            className="inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#C41A1F] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Demander un Devis
          </Link>
          <a
            href="#realisations"
            className="inline-flex items-center justify-center border-2 border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-sm sm:text-base hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Nos Réalisations
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="#E31E24" className="text-[#E31E24]" />
            ))}
          </div>
          <span className="text-white/70 text-sm font-medium">
            +150 projets réalisés en Savoie
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  )
}
