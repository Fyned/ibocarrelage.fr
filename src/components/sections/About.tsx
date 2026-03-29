import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const advantages = [
  "Plus de 10 ans d'expérience",
  'Devis gratuit et sans engagement',
  'Travail soigné et finitions impeccables',
  'Intervention dans toute la Savoie',
]

export default function About() {
  return (
    <section id="a-propos" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="À PROPOS"
              title="IBO Carrelage, votre carreleur de confiance"
              align="left"
              className="mb-6 md:mb-8"
            />

            <div className="flex flex-col gap-5 text-[#838383] text-base leading-relaxed mb-8">
              <p>
                Installé à Chambéry au cœur de la Savoie, IBO Carrelage est une entreprise artisanale
                spécialisée dans la pose de carrelage, la rénovation de salle de bain et tous types de
                travaux de revêtement de sols et murs.
              </p>
              <p>
                Passionné par les beaux projets, notre équipe met son savoir-faire au service de vos
                envies. Que ce soit pour une construction neuve ou une rénovation, nous vous accompagnons
                de la conception à la réalisation, avec un souci constant de qualité et de finition.
              </p>
              <p>
                Notre engagement : des conseils personnalisés, un travail soigné et le respect des délais.
                Chaque chantier est unique, et nous prenons le temps de comprendre vos besoins pour vous
                offrir un résultat à la hauteur de vos attentes.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {advantages.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#E31E24] shrink-0" />
                  <span className="text-[#2B2A29] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image col */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/carreleur-travail.webp"
                alt="Artisan carreleur IBO Carrelage en intervention à Chambéry"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 border border-[#F0F0F0]">
              <p className="text-3xl font-bold text-[#E31E24] leading-none">10+</p>
              <p className="text-xs text-[#838383] mt-1 font-medium">ans d'expérience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
