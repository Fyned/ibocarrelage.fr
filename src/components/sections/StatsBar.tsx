import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { value: 10, suffix: '+', label: "Ans d'expérience" },
  { value: 150, suffix: '+', label: 'Projets réalisés' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 48, suffix: 'h', label: 'Délai de réponse' },
]

export default function StatsBar() {
  return (
    <section className="relative py-16 md:py-20 bg-[#2B2A29] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 36px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-[#E31E24] mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
