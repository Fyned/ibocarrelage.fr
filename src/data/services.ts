import { Home, Droplets, Sun, LayoutGrid, Hammer, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: number
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 1,
    icon: Home,
    title: 'Carrelage Intérieur',
    description:
      'Pose de carrelage pour toutes les pièces de votre maison : salon, cuisine, couloir, chambre. Tous formats et matériaux : grès cérame, pierre naturelle, carreaux de ciment.',
  },
  {
    id: 2,
    icon: Droplets,
    title: 'Salle de Bain',
    description:
      "Rénovation complète de salle de bain : pose de faïence, carrelage au sol, douche à l'italienne, étanchéité. Un espace sur mesure qui vous ressemble.",
  },
  {
    id: 3,
    icon: Sun,
    title: 'Carrelage Extérieur',
    description:
      'Pose de carrelage pour terrasses, balcons, escaliers et tours de piscine. Des matériaux résistants au gel et aux intempéries pour un résultat durable.',
  },
  {
    id: 4,
    icon: LayoutGrid,
    title: 'Faïence Murale',
    description:
      "Habillage de vos murs en faïence, zellige ou mosaïque. Crédences de cuisine, murs de douche, habillages décoratifs — des finitions soignées.",
  },
  {
    id: 5,
    icon: Hammer,
    title: 'Travaux Neufs',
    description:
      'Intervention sur chantiers de construction neuve. Préparation des supports, pose de chape, carrelage et finitions selon les normes en vigueur.',
  },
  {
    id: 6,
    icon: RefreshCw,
    title: 'Rénovation',
    description:
      "Dépose de l'ancien carrelage, ragréage, mise à niveau et pose du nouveau revêtement. Redonnez vie à vos espaces avec un carrelage moderne.",
  },
]
