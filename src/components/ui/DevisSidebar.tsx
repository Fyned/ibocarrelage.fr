import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, ArrowRight, Send } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
}

interface FormData {
  nom: string
  email: string
  telephone: string
  type_travaux: string
  message: string
}

const initial: FormData = {
  nom: '',
  email: '',
  telephone: '',
  type_travaux: '',
  message: '',
}

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]/50 transition-all duration-200'

const labelClass = 'block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5'

export default function DevisSidebar({ open, onClose }: Props) {
  const [form, setForm] = useState<FormData>(initial)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setSubmitted(false)
      setForm(initial)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 z-[61] h-full w-full sm:w-[480px] bg-[#1a1918] shadow-2xl overflow-y-auto"
            initial={{ clipPath: 'circle(0% at calc(100% - 60px) 48px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 60px) 48px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 60px) 48px)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="p-6 sm:p-8 min-h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[#E31E24] text-xs font-bold uppercase tracking-widest">Devis gratuit</p>
                  <h2 className="text-white text-2xl font-bold mt-1">Votre projet</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle className="text-green-400" size={40} />
                    </motion.div>
                    <h3 className="text-white text-2xl font-bold mb-3">Merci !</h3>
                    <p className="text-white/50 leading-relaxed max-w-sm">
                      Nous avons bien reçu votre demande et nous vous recontacterons dans les 24 heures.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-sm font-medium"
                    >
                      Fermer
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Nom */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label htmlFor="sb-nom" className={labelClass}>Nom complet</label>
                      <input
                        id="sb-nom"
                        name="nom"
                        type="text"
                        required
                        placeholder="Votre nom et prénom"
                        value={form.nom}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="sb-email" className={labelClass}>E-mail</label>
                      <input
                        id="sb-email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@email.fr"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </motion.div>

                    {/* Téléphone */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label htmlFor="sb-tel" className={labelClass}>Téléphone</label>
                      <input
                        id="sb-tel"
                        name="telephone"
                        type="tel"
                        required
                        placeholder="06 XX XX XX XX"
                        value={form.telephone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </motion.div>

                    {/* Type de travaux */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="sb-type" className={labelClass}>Type de travaux</label>
                      <select
                        id="sb-type"
                        name="type_travaux"
                        required
                        value={form.type_travaux}
                        onChange={handleChange}
                        className={`${inputClass} ${!form.type_travaux ? 'text-white/30' : ''}`}
                      >
                        <option value="" disabled>Sélectionnez</option>
                        <option value="interieur">Carrelage intérieur</option>
                        <option value="exterieur">Carrelage extérieur</option>
                        <option value="salle-de-bain">Salle de bain</option>
                        <option value="faience">Faïence murale</option>
                        <option value="renovation">Rénovation complète</option>
                        <option value="autre">Autre</option>
                      </select>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                      className="flex-1"
                    >
                      <label htmlFor="sb-msg" className={labelClass}>Votre projet</label>
                      <textarea
                        id="sb-msg"
                        name="message"
                        required
                        rows={4}
                        placeholder="Décrivez votre projet en quelques mots..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-3 bg-[#E31E24] text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-[#E31E24]/20 hover:bg-[#C41A1F] hover:shadow-xl hover:shadow-[#E31E24]/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={18} />
                      Envoyer ma demande
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>

                    <p className="text-white/20 text-xs text-center mt-1">
                      Réponse garantie sous 24h
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
