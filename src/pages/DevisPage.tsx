import { useState, type FormEvent, type ChangeEvent } from 'react'
import { CheckCircle } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import { useMeta } from '../hooks/useMeta'

interface FormData {
  nom: string
  email: string
  telephone: string
  ville: string
  type_travaux: string
  surface: string
  message: string
}

const initialForm: FormData = {
  nom: '',
  email: '',
  telephone: '',
  ville: '',
  type_travaux: '',
  surface: '',
  message: '',
}

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[#2B2A29] placeholder-[#bdbdbd] bg-white focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] transition-colors'

const labelClass = 'block text-sm font-semibold text-[#2B2A29] mb-2'

export default function DevisPage() {
  useMeta({
    title: 'Devis Gratuit | IBO Carrelage – Carreleur Chambéry, Savoie',
    description:
      'Demandez votre devis gratuit pour vos travaux de carrelage à Chambéry et en Savoie. Réponse sous 24h. IBO Carrelage, artisan de confiance.',
  })

  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B2A29] mb-4">
            Merci pour votre demande !
          </h2>
          <p className="text-[#838383] leading-relaxed text-lg">
            Nous avons bien reçu votre message et nous vous recontacterons dans les 24 heures.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="bg-[#2B2A29] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="DEVIS GRATUIT"
            title="Demandez votre devis gratuit"
            subtitle="Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais."
            light
          />
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-[#e8e8e8] p-8 md:p-10 space-y-6"
          >
            {/* Nom */}
            <div>
              <label htmlFor="nom" className={labelClass}>
                Nom complet <span className="text-[#E31E24]">*</span>
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                placeholder="Votre nom et prénom"
                value={form.nom}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Email + Téléphone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Adresse e-mail <span className="text-[#E31E24]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.fr"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="telephone" className={labelClass}>
                  Téléphone <span className="text-[#E31E24]">*</span>
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  required
                  placeholder="06 XX XX XX XX"
                  value={form.telephone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Ville */}
            <div>
              <label htmlFor="ville" className={labelClass}>
                Ville
              </label>
              <input
                id="ville"
                name="ville"
                type="text"
                placeholder="Chambéry, Aix-les-Bains..."
                value={form.ville}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Type de travaux */}
            <div>
              <label htmlFor="type_travaux" className={labelClass}>
                Type de travaux <span className="text-[#E31E24]">*</span>
              </label>
              <select
                id="type_travaux"
                name="type_travaux"
                required
                value={form.type_travaux}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Sélectionnez un type de travaux
                </option>
                <option value="interieur">Carrelage intérieur</option>
                <option value="exterieur">Carrelage extérieur</option>
                <option value="salle-de-bain">Salle de bain</option>
                <option value="faience">Faïence murale</option>
                <option value="renovation">Rénovation complète</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Surface */}
            <div>
              <label htmlFor="surface" className={labelClass}>
                Surface approximative (m²)
              </label>
              <input
                id="surface"
                name="surface"
                type="text"
                placeholder="Ex: 25 m²"
                value={form.surface}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Décrivez votre projet <span className="text-[#E31E24]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décrivez votre projet en quelques mots..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Envoyer ma demande
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
