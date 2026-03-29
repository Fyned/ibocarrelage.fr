import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionTitle from '../ui/SectionTitle'

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="TÉMOIGNAGES"
          title="Ce que disent nos clients"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="bg-[#FAFAFA] border border-[#F0F0F0] rounded-2xl p-6 md:p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote size={28} className="text-[#E31E24]/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={15} fill="#E31E24" className="text-[#E31E24]" />
                ))}
              </div>

              <p className="text-[#2B2A29] text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              <div className="border-t border-[#F0F0F0] pt-4">
                <p className="font-semibold text-[#2B2A29] text-sm">{t.name}</p>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-[#838383] text-xs">{t.location}</p>
                  <p className="text-[#E31E24] text-xs font-medium">{t.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
