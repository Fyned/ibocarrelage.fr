import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import ImageLightbox from '../components/ui/ImageLightbox'
import { projects, type Project, type ProjectCategory } from '../data/projects'
import { useMeta } from '../hooks/useMeta'
import { useDevis } from '../hooks/useDevis'

type Filter = 'tous' | ProjectCategory

const filters: { key: Filter; label: string }[] = [
  { key: 'tous', label: 'Tous' },
  { key: 'interieur', label: 'Intérieur' },
  { key: 'salle-de-bain', label: 'Salle de Bain' },
  { key: 'exterieur', label: 'Extérieur' },
]

export default function GalleryPage() {
  const { openDevis } = useDevis()

  useMeta({
    title: 'Nos Réalisations | IBO Carrelage – Carreleur à Chambéry',
    description:
      "Découvrez les réalisations d'IBO Carrelage : salle de bain, carrelage intérieur, terrasse, faïence. Projets réalisés à Chambéry et en Savoie.",
  })

  const [activeFilter, setActiveFilter] = useState<Filter>('tous')
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null)

  const filtered =
    activeFilter === 'tous' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="bg-[#2B2A29] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="NOS RÉALISATIONS"
            title="Toutes nos réalisations"
            subtitle="Parcourez l'ensemble de nos projets de carrelage réalisés en Savoie."
            light
          />
        </div>
      </section>

      {/* Filtres + Grille */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Boutons filtre */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f.key
                    ? 'bg-[#E31E24] text-white shadow-md'
                    : 'bg-white text-[#2B2A29] border border-[#e0e0e0] hover:border-[#E31E24] hover:text-[#E31E24]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grille avec layout animation */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square bg-gray-200"
                  onClick={() => setLightboxProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-sm md:text-base leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E31E24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vous avez un projet ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Demandez votre devis gratuit !
          </p>
          <button
            onClick={openDevis}
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
          >
            Demander un Devis <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <ImageLightbox
            src={lightboxProject.image}
            alt={lightboxProject.alt}
            caption={lightboxProject.description}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
