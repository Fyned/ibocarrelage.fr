import { motion } from 'framer-motion'
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="NOS SERVICES"
          title="Une expertise complète en carrelage"
          subtitle="De la salle de bain à la terrasse, nous réalisons tous vos projets de carrelage avec passion et savoir-faire."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl border border-[#F0F0F0] p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#E31E24]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="w-12 h-12 bg-[#E31E24]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E31E24]/20 transition-colors">
                <service.icon size={22} className="text-[#E31E24]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2B2A29] mb-3">{service.title}</h3>
              <p className="text-[#838383] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
