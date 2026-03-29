export type ProjectCategory = 'interieur' | 'salle-de-bain' | 'exterieur'

export interface Project {
  id: number
  title: string
  category: ProjectCategory
  description: string
  alt: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Salle de bain moderne',
    category: 'salle-de-bain',
    description: "Rénovation complète avec douche à l'italienne et faïence grand format",
    alt: "Rénovation salle de bain avec douche à l'italienne – IBO Carrelage Chambéry",
    image: '/images/gallery/sdb-moderne.webp',
  },
  {
    id: 2,
    title: 'Terrasse en grès cérame',
    category: 'exterieur',
    description: 'Pose de carrelage extérieur imitation bois sur terrasse',
    alt: 'Pose de carrelage extérieur sur terrasse en Savoie – IBO Carrelage',
    image: '/images/gallery/terrasse-gres.webp',
  },
  {
    id: 3,
    title: 'Cuisine contemporaine',
    category: 'interieur',
    description: 'Carrelage sol grand format et crédence en zellige',
    alt: 'Carrelage sol et crédence cuisine contemporaine à Chambéry',
    image: '/images/gallery/cuisine-contemporaine.webp',
  },
  {
    id: 4,
    title: 'Salle de bain zen',
    category: 'salle-de-bain',
    description: 'Ambiance nature avec carrelage imitation pierre et bois',
    alt: 'Salle de bain zen carrelage imitation pierre et bois – Chambéry',
    image: '/images/gallery/sdb-zen.webp',
  },
  {
    id: 5,
    title: 'Salon élégant',
    category: 'interieur',
    description: 'Carrelage effet marbre en 120x60 pour un rendu luxueux',
    alt: 'Carrelage effet marbre grand format salon – IBO Carrelage Savoie',
    image: '/images/gallery/salon-elegant.webp',
  },
  {
    id: 6,
    title: 'Escalier extérieur',
    category: 'exterieur',
    description: "Habillage d'escalier en carrelage antidérapant",
    alt: "Habillage escalier extérieur carrelage antidérapant – Savoie",
    image: '/images/gallery/escalier-exterieur.webp',
  },
  {
    id: 7,
    title: "Douche à l'italienne",
    category: 'salle-de-bain',
    description: 'Mosaïque et faïence grand format pour une douche épurée',
    alt: "Douche à l'italienne mosaïque et faïence – IBO Carrelage Chambéry",
    image: '/images/gallery/douche-italienne.webp',
  },
  {
    id: 8,
    title: 'Entrée et couloir',
    category: 'interieur',
    description: 'Carreaux de ciment pour une entrée pleine de caractère',
    alt: 'Carreaux de ciment entrée et couloir – pose carrelage Chambéry',
    image: '/images/gallery/entree-couloir.webp',
  },
]
