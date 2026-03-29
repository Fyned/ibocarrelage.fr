import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { projects } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle'

export default function Realisations() {
  const [lightbox, setLightbox] = useState<typeof projects[0] | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <section id="realisations" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="NOS RÉALISATIONS"
          title="Nos derniers projets"
          subtitle="Découvrez une sélection de nos réalisations en Savoie et dans les environs de Chambéry."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              className="relative overflow-hidden rounded-xl group aspect-[4/3] w-full text-left"
              onClick={() => setLightbox(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2A29]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[#E31E24] text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                  {project.category.replace('-', ' ')}
                </p>
                <p className="text-white font-semibold text-sm leading-tight">{project.title}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 border-2 border-[#E31E24] text-[#E31E24] px-8 py-3 rounded-lg font-semibold hover:bg-[#E31E24] hover:text-white transition-all duration-300"
          >
            Voir toute la galerie →
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="Fermer"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.alt}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{lightbox.title}</p>
                <p className="text-white/60 text-sm mt-1">{lightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
