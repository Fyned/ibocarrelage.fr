import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'
import { instagramPosts } from '../../data/instagramPosts'

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 md:mb-14 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Instagram size={16} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-[#838383] uppercase tracking-wider">Instagram</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2A29] tracking-tight">
              Nos derniers chantiers
            </h2>
            <p className="text-[#838383] mt-2">
              22K abonnés · Suivez nos réalisations en temps réel
            </p>
          </div>

          <a
            href="https://www.instagram.com/ibocarrelage/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-[#F0F0F0] text-[#2B2A29] px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[#E31E24] hover:text-[#E31E24] transition-all duration-300 shadow-sm shrink-0"
          >
            <Instagram size={16} />
            @ibocarrelage
            <ExternalLink size={14} className="text-[#B5B5B5]" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-3">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-xl group aspect-square block bg-[#F0F0F0]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <img
                src={post.src}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#2B2A29]/0 group-hover:bg-[#2B2A29]/70 transition-all duration-300 flex flex-col items-center justify-center p-3">
                <Instagram
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2"
                />
                <p className="text-white text-xs leading-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}

          {/* Follow CTA card */}
          <motion.a
            href="https://www.instagram.com/ibocarrelage/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-xl aspect-square flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <Instagram size={28} className="mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-center leading-tight px-2">Voir tous les posts</span>
            <span className="text-xs opacity-80 mt-1">22K abonnés</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
