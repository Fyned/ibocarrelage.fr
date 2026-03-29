# CLAUDE.md — IBO Carrelage Demo Site

## 🎯 Proje Özeti

**Proje:** IBO Carrelage — Demo Vitrin Sitesi
**Domain:** ibocarrelage.fr
**Tür:** DEMO (Müşteriye satış amaçlı demo — satın alırsa full proje)
**Dil:** 🇫🇷 Fransızca (tüm içerik, meta, alt text dahil)
**Bölge:** Chambéry, Savoie (73), Auvergne-Rhône-Alpes, Fransa

## 🏢 Firma Bilgileri

- **İsim:** IBO Carrelage
- **Meslek:** Artisan Carreleur (Karo/Fayans Döşeme Ustası)
- **Adres:** 243 rue de Gonrat Bassens, 73000 Chambéry, France
- **Instagram:** @ibocarrelage
- **Hizmetler:**
  - Pose de carrelage intérieur (iç mekan karo döşeme)
  - Pose de carrelage extérieur / terrasses (dış mekan / teras)
  - Rénovation salle de bain complète (banyo renovasyonu)
  - Pose de faïence murale (duvar fayansı)
  - Travaux neufs et rénovation (yeni yapı ve renovasyon)
  - Sols et murs (yer ve duvar kaplamaları)
- **Slogan:** "Passionné par les beaux projets" (Güzel projelere tutkulu)

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 6 + TypeScript
- **Styling:** Tailwind CSS 4
- **Animasyon:** Framer Motion
- **Icons:** Lucide React
- **Router:** React Router v7
- **Deployment:** Hostinger FTP (GitHub Actions)
- **Yapı:** SPA (Single Page Application) + birkaç route

## 📁 Proje Yapısı

```
ibocarrelage.fr/
├── CLAUDE.md                    ← (bu dosya)
├── docs/
│   ├── DESIGN-SYSTEM.md         ← Renkler, tipografi, spacing
│   ├── PAGE-PLAN.md             ← Sayfa yapıları ve Fransızca içerik
│   ├── SEO-STRATEGY.md          ← SEO planı
│   └── IMAGE-PROMPTS.md         ← Gemini görsel üretim prompt'ları
├── public/
│   ├── favicon.svg              ← (mevcut: "ibocarrelage favicon logo.svg" → kopyalanacak)
│   └── images/
│       ├── logo-dark.svg        ← (mevcut: "ibocarrelage karanlik zemin uzerine logo.svg")
│       ├── logo-light.svg       ← (mevcut: "ibocarrelage beyaz zemin uzerine logo.svg")
│       └── gallery/             ← Gemini ile üretilecek görseller
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       ← Sticky navbar + logo + hamburger mobile
│   │   │   ├── Footer.tsx       ← İletişim bilgileri + sosyal medya
│   │   │   └── ScrollToTop.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx         ← Tam ekran hero + CTA
│   │   │   ├── Services.tsx     ← Hizmetler grid kartları
│   │   │   ├── Realisations.tsx ← Proje galerisi (lightbox)
│   │   │   ├── About.tsx        ← Hakkımızda + neden biz
│   │   │   ├── Testimonials.tsx ← Müşteri yorumları (statik demo data)
│   │   │   └── Contact.tsx      ← İletişim formu + harita + adres
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionTitle.tsx
│   │       └── ImageLightbox.tsx
│   ├── pages/
│   │   ├── HomePage.tsx         ← Ana sayfa (tüm section'lar)
│   │   ├── GalleryPage.tsx      ← Genişletilmiş galeri sayfası
│   │   └── DevisPage.tsx        ← Devis (teklif) talep formu
│   ├── data/
│   │   ├── services.ts          ← Hizmet verileri
│   │   ├── projects.ts          ← Proje/galeri verileri
│   │   └── testimonials.ts      ← Yorum verileri
│   └── hooks/
│       ├── useScrollAnimation.ts
│       └── useMediaQuery.ts
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🖼 Logo Dosyaları

Proje kökünde 3 adet logo SVG mevcut. Bunları şu şekilde kullan:

| Kaynak Dosya | Hedef | Kullanım |
|---|---|---|
| `ibocarrelage karanlik zemin uzerine logo.svg` | `public/images/logo-dark.svg` | Koyu arka plan üzerinde (Header scroll öncesi, Footer) |
| `ibocarrelage beyaz zemin uzerine logo.svg` | `public/images/logo-light.svg` | Açık arka plan üzerinde (Header scroll sonrası) |
| `ibocarrelage favicon logo.svg` | `public/favicon.svg` | Browser tab favicon |

**ÖNEMLİ:** Logoları KOPYALA, orijinalleri silme. Logo SVG'leri CorelDRAW 2018 çıktısı, viewBox="0 0 29700 21000" (A4 boyut). Web'de kullanmak için CSS ile boyutlandır, SVG'yi değiştirme.

## ⚙️ Geliştirme Komutları

```bash
# Proje oluşturma
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom framer-motion lucide-react

# Tailwind CSS 4
npm install tailwindcss @tailwindcss/vite

# Geliştirme
npm run dev

# Build
npm run build
```

## 🚀 Deploy (Hostinger FTP)

GitHub Actions ile FTP deploy:
- **GitHub user:** Fyned
- **Local dir:** `./dist/`
- **Server dir:** `/public_html/`
- **Action:** `SamKirkland/FTP-Deploy-Action@v4.3.5`

## 📋 Demo Kapsamı — Ne VAR, Ne YOK

### ✅ Demo'da VAR:
- Tam responsive tasarım (mobile-first)
- Etkileyici hero section (Gemini üretimi arka plan görseli)
- Hizmetler bölümü (6 hizmet kartı)
- Réalisations galerisi (8-10 Gemini üretimi proje görseli)
- Müşteri yorumları (3 adet statik demo yorum)
- İletişim bölümü (adres, harita iframe, form UI)
- Devis talep sayfası (form UI — backend yok)
- Smooth scroll animasyonları (Framer Motion)
- SEO meta tags
- Mobil hamburger menü
- Favicon

### ❌ Demo'da YOK (full projede eklenecek):
- Gerçek form backend (Supabase/email)
- Google Maps API entegrasyonu (demo'da statik harita iframe)
- Blog bölümü
- Çok sayfalı SEO sayfaları (ville-par-ville)
- Schema.org markup
- Analytics (GA4, Meta Pixel)
- Sitemap.xml / robots.txt
- Gerçek müşteri yorumları
- Çoklu dil desteği

## 🔑 Önemli Kurallar

1. **Tüm metin içeriği Fransızca** olmalı — düzgün, doğal Fransızca (Google Translate kalitesizliği YASAK)
2. **Görseller placeholder** — Gemini ile üretilecek, `public/images/gallery/` altına konulacak
3. **Form'lar çalışmaz** — Sadece UI gösterimi, submit engellenir, "Merci" mesajı gösterilir
4. **Responsive** — Mobile-first yaklaşım, 320px'den 1920px'e kadar test edilmeli
5. **Performans** — Lazy loading images, optimize SVG, minimal bundle
6. **Accessibility** — Alt text (Fransızca), semantic HTML, focus states
