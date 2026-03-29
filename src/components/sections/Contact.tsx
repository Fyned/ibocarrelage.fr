import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    lines: ['243 rue de Gonrat Bassens', '73000 Chambéry, France'],
  },
  {
    icon: Phone,
    label: 'Téléphone',
    lines: ['06 XX XX XX XX'],
    href: 'tel:+33600000000',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['contact@ibocarrelage.fr'],
    href: 'mailto:contact@ibocarrelage.fr',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    lines: ['@ibocarrelage'],
    href: 'https://instagram.com/ibocarrelage',
    external: true,
  },
]

const horaires = [
  { day: 'Lundi – Vendredi', hours: '8h00 – 18h00' },
  { day: 'Samedi', hours: 'Sur rendez-vous' },
  { day: 'Dimanche', hours: 'Fermé' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#2B2A29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="CONTACT"
          title="Contactez-nous"
          subtitle="N'hésitez pas à nous contacter pour toute demande de devis ou d'information."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            {/* Coordonnées */}
            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => {
                const Tag = item.href ? 'a' : 'div'
                const linkProps = item.href
                  ? { href: item.href, ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
                  : {}
                return (
                  <Tag
                    key={item.label}
                    {...linkProps}
                    className={`flex items-start gap-4 group ${item.href ? 'hover:opacity-80 transition-opacity' : ''}`}
                  >
                    <div className="w-10 h-10 bg-[#E31E24]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#E31E24]/30 transition-colors">
                      <item.icon size={18} className="text-[#E31E24]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-white/80 text-sm">{line}</p>
                      ))}
                    </div>
                  </Tag>
                )
              })}
            </div>

            {/* Horaires */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E31E24]/20 rounded-lg flex items-center justify-center">
                  <Clock size={18} className="text-[#E31E24]" />
                </div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Horaires</p>
              </div>
              <div className="flex flex-col gap-2 pl-13">
                {horaires.map((h) => (
                  <div key={h.day} className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0">
                    <span className="text-white/60 text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.hours === 'Fermé' ? 'text-white/30' : 'text-white'}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden h-full min-h-[350px] lg:min-h-[420px]">
              <iframe
                title="IBO Carrelage — Chambéry, Savoie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.0!2d5.92!3d45.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzEyLjAiTiA1wrA1NScxMi4wIkU!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
