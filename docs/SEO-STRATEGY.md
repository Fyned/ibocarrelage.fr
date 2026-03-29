# SEO-STRATEGY.md — IBO Carrelage Demo Site

> Demo aşaması için temel SEO. Full projede genişletilecek.

## 🎯 Hedef Anahtar Kelimeler

### Primary Keywords
- `carreleur Chambéry`
- `carrelage Chambéry`
- `pose carrelage Chambéry`
- `carreleur Savoie`

### Secondary Keywords
- `rénovation salle de bain Chambéry`
- `carreleur Aix-les-Bains`
- `carrelage extérieur Chambéry`
- `artisan carreleur Savoie 73`
- `pose de faïence Chambéry`
- `devis carrelage Chambéry`

### Long-tail Keywords (full projede blog/SEO sayfaları)
- `carreleur salle de bain Chambéry`
- `pose carrelage terrasse Chambéry`
- `rénovation carrelage Chambéry prix`
- `carreleur La Motte-Servolex`
- `carreleur Bassens Savoie`

## 📋 Meta Tags

### Ana Sayfa (/)
```html
<title>IBO Carrelage | Artisan Carreleur à Chambéry, Savoie (73)</title>
<meta name="description" content="IBO Carrelage, votre artisan carreleur à Chambéry. Pose de carrelage intérieur et extérieur, rénovation de salle de bain, faïence. Devis gratuit en Savoie (73).">
<meta name="keywords" content="carreleur Chambéry, carrelage Savoie, pose carrelage, rénovation salle de bain, faïence, artisan carreleur 73">
```

### Galerie (/galerie)
```html
<title>Nos Réalisations | IBO Carrelage – Carreleur à Chambéry</title>
<meta name="description" content="Découvrez les réalisations d'IBO Carrelage : salle de bain, carrelage intérieur, terrasse, faïence. Projets réalisés à Chambéry et en Savoie.">
```

### Devis (/devis)
```html
<title>Devis Gratuit | IBO Carrelage – Carreleur Chambéry, Savoie</title>
<meta name="description" content="Demandez votre devis gratuit pour vos travaux de carrelage à Chambéry et en Savoie. Réponse sous 24h. IBO Carrelage, artisan de confiance.">
```

## 🔗 Open Graph Tags (tüm sayfalarda)

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="IBO Carrelage">
<meta property="og:image" content="/images/og-image.webp"> <!-- Gemini ile üretilecek -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## 🏗 Semantic HTML Yapısı

```html
<!-- Her sayfada -->
<html lang="fr">

<!-- Ana sayfa section yapısı -->
<header> → Navbar
<main>
  <section id="hero"> → Hero
  <section id="services"> → Hizmetler
  <section id="realisations"> → Galeri
  <section id="a-propos"> → Hakkımızda
  <section id="temoignages"> → Yorumlar
  <section id="contact"> → İletişim
</main>
<footer> → Footer
```

## 🖼 Görsel SEO

Tüm görsellerde Fransızca alt text kullan:

| Görsel | Alt Text |
|---|---|
| Hero background | `Carrelage moderne dans un salon lumineux à Chambéry` |
| Salle de bain moderne | `Rénovation salle de bain avec douche à l'italienne – IBO Carrelage Chambéry` |
| Terrasse | `Pose de carrelage extérieur sur terrasse en Savoie` |
| Cuisine | `Carrelage sol et crédence cuisine contemporaine` |
| Carreleur au travail | `Artisan carreleur IBO Carrelage en intervention à Chambéry` |

## ⚡ Performance (Demo)

- Görseller: WebP format, lazy loading (`loading="lazy"`)
- Font: `display=swap` (FOUT > FOIT)
- SVG logolar: inline veya `<img>` (zaten küçük)
- Vite: Automatic code splitting, tree shaking

## 📌 Full Projede Eklenecek SEO Unsurları

- [ ] Schema.org LocalBusiness markup
- [ ] Schema.org Service markup
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Google Business Profile entegrasyonu
- [ ] Ville-par-ville SEO sayfaları (Aix-les-Bains, La Motte-Servolex, vb.)
- [ ] Blog (SEO içerik stratejisi)
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Canonical URL'ler
- [ ] Hreflang (eğer çoklu dil eklenirse)
