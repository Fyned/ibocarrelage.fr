import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Realisations from '../components/sections/Realisations'
import StatsBar from '../components/sections/StatsBar'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'
import { useMeta } from '../hooks/useMeta'

export default function HomePage() {
  useMeta({
    title: 'IBO Carrelage | Artisan Carreleur à Chambéry, Savoie (73)',
    description:
      'IBO Carrelage, votre artisan carreleur à Chambéry. Pose de carrelage intérieur et extérieur, rénovation de salle de bain, faïence. Devis gratuit en Savoie (73).',
  })

  return (
    <>
      <Hero />
      <Services />
      <StatsBar />
      <Realisations />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
