import { useState } from 'react'
import { X } from 'lucide-react'

export default function DemoBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#2B2A29] border-t border-white/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="https://www.dmckreatif.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#E31E24] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full hover:bg-[#C41A1F] transition-colors"
          >
            Demo
          </a>
          <p className="text-white/60 text-xs sm:text-sm truncate">
            Site de démonstration créé par{' '}
            <a href="https://www.dmckreatif.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#E31E24] transition-colors underline underline-offset-2">DMC Kreatif</a>
            <span className="hidden sm:inline"> — Ce site est un aperçu. Contactez-nous pour votre projet.</span>
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
