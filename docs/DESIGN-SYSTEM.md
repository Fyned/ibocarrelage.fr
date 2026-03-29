# DESIGN-SYSTEM.md — IBO Carrelage

## 🎨 Marka Renkleri (Logo'dan Çıkarılmış)

### Primary Palette

| Token | Hex | Kullanım |
|---|---|---|
| `--color-primary` | `#E31E24` | Marka kırmızısı — CTA butonlar, vurgular, accent |
| `--color-primary-dark` | `#C41A1F` | Hover state, aktif butonlar |
| `--color-primary-light` | `#FF3B41` | Hafif vurgular, icon background |

### Neutral Palette

| Token | Hex | Kullanım |
|---|---|---|
| `--color-dark` | `#2B2A29` | Ana metin, koyu arka planlar, header |
| `--color-dark-soft` | `#3D3C3B` | İkincil metin, border |
| `--color-gray` | `#838383` | Yardımcı metin, placeholder |
| `--color-gray-light` | `#B5B5B5` | Divider, disabled state |
| `--color-gray-lighter` | `#F0F0F0` | Section arka plan alternance |
| `--color-white` | `#FEFEFE` | Beyaz arka plan (saf beyaz değil, logo'daki ton) |
| `--color-bg` | `#FAFAFA` | Sayfa arka planı |

### Semantic Colors

| Token | Hex | Kullanım |
|---|---|---|
| `--color-success` | `#16A34A` | Form başarı mesajları |
| `--color-error` | `#DC2626` | Form hata mesajları |

## 📐 Tailwind CSS 4 Konfigürasyonu

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-primary: #E31E24;
  --color-primary-dark: #C41A1F;
  --color-primary-light: #FF3B41;
  --color-dark: #2B2A29;
  --color-dark-soft: #3D3C3B;
  --color-gray: #838383;
  --color-gray-light: #B5B5B5;
  --color-gray-lighter: #F0F0F0;
  --color-surface: #FAFAFA;

  --font-heading: "Inter", "system-ui", sans-serif;
  --font-body: "Inter", "system-ui", sans-serif;

  --breakpoint-xs: 480px;
}
```

## 🔤 Tipografi

### Font Ailesi
- **Heading + Body:** Inter (Google Fonts) — modern, temiz, profesyonel
- **Fallback:** system-ui, -apple-system, sans-serif

### Font Boyutları (Tailwind classes)

| Eleman | Desktop | Mobile | Weight | Tracking |
|---|---|---|---|---|
| Hero Title | `text-5xl` → `text-6xl` | `text-3xl` → `text-4xl` | `font-bold` (700) | `tracking-tight` |
| Section Title | `text-3xl` → `text-4xl` | `text-2xl` → `text-3xl` | `font-bold` (700) | `tracking-tight` |
| Section Subtitle | `text-lg` | `text-base` | `font-normal` (400) | normal |
| Card Title | `text-xl` | `text-lg` | `font-semibold` (600) | normal |
| Body | `text-base` (16px) | `text-base` | `font-normal` (400) | normal |
| Small / Caption | `text-sm` (14px) | `text-sm` | `font-normal` (400) | normal |
| Button | `text-base` | `text-sm` | `font-semibold` (600) | `tracking-wide` |

### Google Fonts Link
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 📏 Spacing & Layout

### Container
- Max genişlik: `max-w-7xl` (1280px)
- Padding: `px-4` (mobile) → `px-6` (tablet) → `px-8` (desktop)
- Sayfa margin: `mx-auto`

### Section Spacing
- Section arası: `py-16` (mobile) → `py-20` (tablet) → `py-24` (desktop)
- Section title ile content arası: `mb-12` → `mb-16`

### Grid Sistemi
- **Hizmetler:** `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3` gap-6 → gap-8
- **Galeri:** `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3` → `xl:grid-cols-4` gap-4
- **Testimonials:** `grid-cols-1` → `md:grid-cols-3` gap-6 → gap-8

## 🧩 Komponent Stilleri

### Butonlar

```
Primary Button:
  bg-primary text-white px-8 py-3 rounded-lg font-semibold
  hover:bg-primary-dark transition-colors duration-300
  shadow-md hover:shadow-lg

Secondary Button (Outline):
  border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold
  hover:bg-primary hover:text-white transition-all duration-300

Ghost Button:
  text-primary font-semibold px-4 py-2
  hover:bg-primary/10 rounded-lg transition-colors
```

### Kartlar (Hizmet / Proje)

```
Hizmet Kartı:
  bg-white rounded-2xl shadow-md hover:shadow-xl
  p-6 → p-8
  transition-all duration-300 hover:-translate-y-1
  border border-gray-lighter

Proje Kartı (Galeri):
  relative overflow-hidden rounded-xl
  group cursor-pointer
  aspect-[4/3]
  Overlay: bg-gradient-to-t from-dark/80 to-transparent
  opacity-0 group-hover:opacity-100 transition-opacity
```

### Header/Navbar

```
Sticky Header:
  fixed top-0 w-full z-50
  bg-dark/95 backdrop-blur-md  (scroll öncesi — koyu)
  → bg-white/95 backdrop-blur-md shadow-sm  (scroll sonrası — açık)
  transition-all duration-300
  height: h-16 (mobile) → h-20 (desktop)

Nav Links:
  text-white/80 hover:text-white  (koyu modda)
  → text-dark hover:text-primary  (açık modda)
  font-medium text-sm tracking-wide uppercase
```

### Footer

```
Footer:
  bg-dark text-white/80
  py-12 → py-16

Footer Links:
  text-white/60 hover:text-primary transition-colors
```

## 🎭 Animasyonlar (Framer Motion)

### Scroll Reveal
```typescript
// Aşağıdan yukarı fade-in
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Staggered children
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};
```

### Hero Animasyonu
```typescript
// Hero title — soldan giriş
{ initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } }

// Hero subtitle — gecikmeli
{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.6 } }

// CTA butonlar — gecikmeli
{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6, duration: 0.5 } }
```

### Hover Effects
- Kartlar: `hover:-translate-y-1` veya `hover:scale-[1.02]`
- Görseller: `group-hover:scale-110 transition-transform duration-500`
- Butonlar: `hover:shadow-lg`

## 🌑 Tasarım Ruhu

Bu site bir **artisan carreleur** için — lüks değil ama **profesyonel, güvenilir, modern** olmalı.

- **Genel his:** Temiz, minimal, beyaz ağırlıklı — kırmızı accent'lerle vurgu
- **Hero:** Etkileyici tam ekran görsel, üzerine koyu overlay + beyaz metin
- **Kartlar:** Hafif gölgeli, yuvarlatılmış köşeler, hover'da yükselme efekti
- **Fotoğraflar:** Büyük, etkileyici, detaylı karo/banyo görselleri (Gemini üretimi)
- **Tipografi:** Sade, okunabilir, büyük başlıklar
- **Whitespace:** Bol boşluk — sıkışık hissetmemeli
- **Renk kullanımı:** %80 beyaz/gri, %15 koyu, %5 kırmızı (accent)
