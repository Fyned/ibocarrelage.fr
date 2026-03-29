export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  project: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie D.',
    location: 'Chambéry',
    rating: 5,
    text: 'IBO Carrelage a entièrement rénové notre salle de bain. Le résultat est magnifique, un travail propre et soigné. Je recommande vivement !',
    project: 'Rénovation salle de bain',
  },
  {
    id: 2,
    name: 'Laurent P.',
    location: 'Aix-les-Bains',
    rating: 5,
    text: "Excellent travail pour notre terrasse. Le carrelage extérieur est parfaitement posé, même dans les angles difficiles. Très professionnel.",
    project: 'Terrasse extérieure',
  },
  {
    id: 3,
    name: 'Sophie et Marc R.',
    location: 'La Motte-Servolex',
    rating: 5,
    text: "Nous avons fait appel à IBO pour le carrelage de toute notre maison neuve. Ponctuel, à l'écoute et un rendu impeccable. Merci !",
    project: 'Construction neuve',
  },
]
