# PAGE-PLAN.md — IBO Carrelage Demo Site Sayfa Planı

> Tüm metin içeriği **doğal Fransızca** olmalıdır.
> Bu bir DEMO site — form'lar çalışmaz, görseller Gemini üretimi placeholder'dır.

---

## 📄 Sayfa Yapısı (Routes)

| Route | Sayfa | Açıklama |
|---|---|---|
| `/` | HomePage | Ana sayfa — tüm section'lar (Hero, Services, Réalisations, About, Testimonials, Contact) |
| `/galerie` | GalleryPage | Genişletilmiş proje galerisi (filtrelenebilir) |
| `/devis` | DevisPage | Devis (teklif) talep formu |

---

## 🏠 ANA SAYFA (HomePage)

### 1. HEADER (Layout Component — tüm sayfalarda)

**Yapı:** Sticky, scroll'da renk değiştiren navbar

```
[LOGO]          Accueil  Services  Réalisations  À Propos  Contact  [DEVIS GRATUIT →]
```

- **Logo:** Scroll öncesi → `logo-dark.svg` (beyaz logo, koyu header bg)
- **Logo:** Scroll sonrası → `logo-light.svg` (koyu logo, beyaz header bg)
- **Nav linkleri:** Smooth scroll (anchor #services, #realisations, vb.)
- **CTA butonu:** "Devis Gratuit" → /devis sayfasına yönlendir
- **Mobile:** Hamburger menü → full-screen overlay nav

### 2. HERO SECTION

**Görsel:** Tam ekran arka plan görseli (Gemini üretimi — modern banyo veya salon karo detayı)
**Overlay:** Koyu gradient (soldan sağa veya alttan üste)

```
Yapı:
┌─────────────────────────────────────────────┐
│                                             │
│   [Logo icon küçük — opsiyonel]             │
│                                             │
│   Votre Artisan Carreleur                   │  ← Küçük üst başlık (tracking-widest, uppercase)
│   à Chambéry                                │
│                                             │
│   Des sols et murs                          │  ← Ana başlık (text-5xl/6xl, bold)
│   d'exception                               │
│                                             │
│   Spécialiste en pose de carrelage,         │  ← Alt metin (text-lg, text-white/80)
│   rénovation de salle de bain et            │
│   travaux neufs dans toute la Savoie.       │
│                                             │
│   [Demander un Devis]  [Nos Réalisations]   │  ← 2 CTA butonu
│                                             │
│   ★★★★★  +150 projets réalisés              │  ← Sosyal kanıt bar
│                                             │
└─────────────────────────────────────────────┘
```

**İçerik:**

- **Üst başlık:** `Votre Artisan Carreleur à Chambéry`
- **Ana başlık:** `Des sols et murs d'exception`
- **Alt metin:** `Spécialiste en pose de carrelage, rénovation de salle de bain et travaux neufs dans toute la Savoie. Passionné par les beaux projets depuis plus de 10 ans.`
- **CTA 1 (Primary):** `Demander un Devis` → /devis
- **CTA 2 (Outline/Ghost):** `Nos Réalisations` → #realisations
- **Sosyal kanıt:** `★★★★★  +150 projets réalisés en Savoie`

---

### 3. SERVICES SECTION (#services)

**Section başlık:**
- Üst etiket: `NOS SERVICES`
- Başlık: `Une expertise complète en carrelage`
- Alt metin: `De la salle de bain à la terrasse, nous réalisons tous vos projets de carrelage avec passion et savoir-faire.`

**6 Hizmet Kartı (grid 3x2):**

#### Kart 1: Carrelage Intérieur
- **Icon:** `Home` (Lucide)
- **Titre:** `Carrelage Intérieur`
- **Description:** `Pose de carrelage pour toutes les pièces de votre maison : salon, cuisine, couloir, chambre. Tous formats et matériaux : grès cérame, pierre naturelle, carreaux de ciment.`

#### Kart 2: Salle de Bain
- **Icon:** `Bath` (Lucide — yoksa `Droplets`)
- **Titre:** `Salle de Bain`
- **Description:** `Rénovation complète de salle de bain : pose de faïence, carrelage au sol, douche à l'italienne, étanchéité. Un espace sur mesure qui vous ressemble.`

#### Kart 3: Carrelage Extérieur
- **Icon:** `Sun` (Lucide)
- **Titre:** `Carrelage Extérieur`
- **Description:** `Pose de carrelage pour terrasses, balcons, escaliers et tours de piscine. Des matériaux résistants au gel et aux intempéries pour un résultat durable.`

#### Kart 4: Faïence Murale
- **Icon:** `LayoutGrid` (Lucide)
- **Titre:** `Faïence Murale`
- **Description:** `Habillage de vos murs en faïence, zellige ou mosaïque. Crédences de cuisine, murs de douche, habillages décoratifs — des finitions soignées.`

#### Kart 5: Travaux Neufs
- **Icon:** `Hammer` (Lucide)
- **Titre:** `Travaux Neufs`
- **Description:** `Intervention sur chantiers de construction neuve. Préparation des supports, pose de chape, carrelage et finitions selon les normes en vigueur.`

#### Kart 6: Rénovation
- **Icon:** `RefreshCw` (Lucide)
- **Titre:** `Rénovation`
- **Description:** `Dépose de l'ancien carrelage, ragréage, mise à niveau et pose du nouveau revêtement. Redonnez vie à vos espaces avec un carrelage moderne.`

---

### 4. RÉALISATIONS SECTION (#realisations)

**Section başlık:**
- Üst etiket: `NOS RÉALISATIONS`
- Başlık: `Nos derniers projets`
- Alt metin: `Découvrez une sélection de nos réalisations en Savoie et dans les environs de Chambéry.`

**Galeri Grid (4 kolon desktop, 2 mobile):** 8 proje kartı göster, "Voir toute la galerie →" butonu /galerie'ye yönlendir.

**Proje Verileri (src/data/projects.ts):**

```typescript
export const projects = [
  {
    id: 1,
    title: "Salle de bain moderne",
    category: "salle-de-bain",
    description: "Rénovation complète avec douche à l'italienne et faïence grand format",
    image: "/images/gallery/sdb-moderne.webp"
  },
  {
    id: 2,
    title: "Terrasse en grès cérame",
    category: "exterieur",
    description: "Pose de carrelage extérieur imitation bois sur terrasse",
    image: "/images/gallery/terrasse-gres.webp"
  },
  {
    id: 3,
    title: "Cuisine contemporaine",
    category: "interieur",
    description: "Carrelage sol grand format et crédence en zellige",
    image: "/images/gallery/cuisine-contemporaine.webp"
  },
  {
    id: 4,
    title: "Salle de bain zen",
    category: "salle-de-bain",
    description: "Ambiance nature avec carrelage imitation pierre et bois",
    image: "/images/gallery/sdb-zen.webp"
  },
  {
    id: 5,
    title: "Salon élégant",
    category: "interieur",
    description: "Carrelage effet marbre en 120x60 pour un rendu luxueux",
    image: "/images/gallery/salon-elegant.webp"
  },
  {
    id: 6,
    title: "Escalier extérieur",
    category: "exterieur",
    description: "Habillage d'escalier en carrelage antidérapant",
    image: "/images/gallery/escalier-exterieur.webp"
  },
  {
    id: 7,
    title: "Douche à l'italienne",
    category: "salle-de-bain",
    description: "Mosaïque et faïence grand format pour une douche épurée",
    image: "/images/gallery/douche-italienne.webp"
  },
  {
    id: 8,
    title: "Entrée et couloir",
    category: "interieur",
    description: "Carreaux de ciment pour une entrée pleine de caractère",
    image: "/images/gallery/entree-couloir.webp"
  }
];
```

**Filtre kategorileri (GalleryPage'de):** `Tous` | `Intérieur` | `Salle de Bain` | `Extérieur`

---

### 5. ABOUT SECTION (#a-propos)

**Layout:** 2 kolon — Sol: Metin / Sağ: Görsel (Gemini üretimi — carreleur çalışırken)

**Section başlık:**
- Üst etiket: `À PROPOS`
- Başlık: `IBO Carrelage, votre carreleur de confiance`

**Metin İçeriği:**

```
Paragraf 1:
Installé à Chambéry au cœur de la Savoie, IBO Carrelage est une entreprise artisanale spécialisée dans la pose de carrelage, la rénovation de salle de bain et tous types de travaux de revêtement de sols et murs.

Paragraf 2:
Passionné par les beaux projets, notre équipe met son savoir-faire au service de vos envies. Que ce soit pour une construction neuve ou une rénovation, nous vous accompagnons de la conception à la réalisation, avec un souci constant de qualité et de finition.

Paragraf 3:
Notre engagement : des conseils personnalisés, un travail soigné et le respect des délais. Chaque chantier est unique, et nous prenons le temps de comprendre vos besoins pour vous offrir un résultat à la hauteur de vos attentes.
```

**Avantajlar Listesi (ikonlu):**

| Icon | Texte |
|---|---|
| `CheckCircle` | `Plus de 10 ans d'expérience` |
| `CheckCircle` | `Devis gratuit et sans engagement` |
| `CheckCircle` | `Travail soigné et finitions impeccables` |
| `CheckCircle` | `Intervention dans toute la Savoie` |

---

### 6. TESTIMONIALS SECTION

**Section başlık:**
- Üst etiket: `TÉMOIGNAGES`
- Başlık: `Ce que disent nos clients`

**3 Yorum Kartı (src/data/testimonials.ts):**

```typescript
export const testimonials = [
  {
    id: 1,
    name: "Marie D.",
    location: "Chambéry",
    rating: 5,
    text: "IBO Carrelage a entièrement rénové notre salle de bain. Le résultat est magnifique, un travail propre et soigné. Je recommande vivement !",
    project: "Rénovation salle de bain"
  },
  {
    id: 2,
    name: "Laurent P.",
    location: "Aix-les-Bains",
    rating: 5,
    text: "Excellent travail pour notre terrasse. Le carrelage extérieur est parfaitement posé, même dans les angles difficiles. Très professionnel.",
    project: "Terrasse extérieure"
  },
  {
    id: 3,
    name: "Sophie et Marc R.",
    location: "La Motte-Servolex",
    rating: 5,
    text: "Nous avons fait appel à IBO pour le carrelage de toute notre maison neuve. Ponctuel, à l'écoute et un rendu impeccable. Merci !",
    project: "Construction neuve"
  }
];
```

---

### 7. CONTACT SECTION (#contact)

**Layout:** 2 kolon — Sol: Bilgiler / Sağ: Harita

**Sol Kolon — Coordonnées:**

```
Titre: Contactez-nous
Sous-titre: N'hésitez pas à nous contacter pour toute demande de devis ou d'information.

📍 243 rue de Gonrat Bassens
   73000 Chambéry, France

📞 [Telefon numarası — müşteriden alınacak, demo'da placeholder]
   06 XX XX XX XX

📧 [Email — müşteriden alınacak, demo'da placeholder]
   contact@ibocarrelage.fr

📱 Instagram: @ibocarrelage

🕐 Horaires:
   Lundi – Vendredi : 8h00 – 18h00
   Samedi : Sur rendez-vous
   Dimanche : Fermé
```

**Sağ Kolon — Harita:**
Google Maps iframe embed — Chambéry, Bassens bölgesi:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.0!2d5.92!3d45.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzEyLjAiTiA1wrA1NScxMi4wIkU!5e0!3m2!1sfr!2sfr!4v1"
  width="100%" height="400" style="border:0;" allowfullscreen loading="lazy">
</iframe>
```
> **Not:** Harita koordinatları yaklaşık. Full projede gerçek Google Maps API ile adres pin'lenecek.

---

### 8. FOOTER

```
┌────────────────────────────────────────────────────────────┐
│  [Logo-dark]                                               │
│                                                            │
│  IBO CARRELAGE          NAVIGATION       HORAIRES          │
│  Artisan Carreleur      Accueil          Lun-Ven: 8h-18h  │
│  à Chambéry             Services         Sam: Sur RDV      │
│                         Réalisations     Dim: Fermé        │
│  243 rue de Gonrat      À Propos                           │
│  73000 Chambéry         Contact          SUIVEZ-NOUS       │
│                         Devis Gratuit    [Instagram icon]  │
│                                                            │
│────────────────────────────────────────────────────────────│
│  © 2025 IBO Carrelage. Tous droits réservés.               │
│  Site réalisé par DMC Kreatif                              │
└────────────────────────────────────────────────────────────┘
```

---

## 📄 GALERIE PAGE (/galerie)

- Header + Footer (ortak layout)
- Başlık: `Toutes nos réalisations`
- Alt metin: `Parcourez l'ensemble de nos projets de carrelage réalisés en Savoie.`
- **Filtre butonları:** `Tous` | `Intérieur` | `Salle de Bain` | `Extérieur`
- **Grid:** Tüm 8 proje, filtrelenebilir (Framer Motion layout animation)
- **Lightbox:** Görsele tıklayınca büyütme (basit modal)
- **CTA alt bölüm:** `Vous avez un projet ? Demandez votre devis gratuit !` + buton

---

## 📄 DEVIS PAGE (/devis)

- Header + Footer (ortak layout)
- Başlık: `Demandez votre devis gratuit`
- Alt metin: `Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.`

**Form Alanları:**

| Alan | Type | Label | Placeholder | Required |
|---|---|---|---|---|
| nom | text | `Nom complet` | `Votre nom et prénom` | ✅ |
| email | email | `Adresse e-mail` | `votre@email.fr` | ✅ |
| telephone | tel | `Téléphone` | `06 XX XX XX XX` | ✅ |
| ville | text | `Ville` | `Chambéry, Aix-les-Bains...` | ❌ |
| type_travaux | select | `Type de travaux` | — | ✅ |
| | | Options: `Carrelage intérieur`, `Carrelage extérieur`, `Salle de bain`, `Faïence murale`, `Rénovation complète`, `Autre` |
| surface | text | `Surface approximative (m²)` | `Ex: 25 m²` | ❌ |
| message | textarea | `Décrivez votre projet` | `Décrivez votre projet en quelques mots...` | ✅ |

**Submit butonu:** `Envoyer ma demande`

**Demo davranışı:** Form submit'te → `e.preventDefault()` → "Merci" success mesajı göster:
```
✅ Merci pour votre demande !
Nous avons bien reçu votre message et nous vous recontacterons dans les 24 heures.
```

> **Not:** Full projede form Supabase Edge Function veya Resend ile çalışacak.
