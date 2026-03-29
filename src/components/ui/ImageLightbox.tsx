import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ImageLightboxProps {
  src: string
  alt: string
  caption?: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, caption, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <X size={32} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] mx-auto object-contain rounded-xl"
        />
        {caption && (
          <p className="text-white/60 text-center mt-4 text-sm">{caption}</p>
        )}
      </motion.div>
    </motion.div>
  )
}
