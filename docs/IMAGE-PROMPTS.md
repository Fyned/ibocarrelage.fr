# IMAGE-PROMPTS.md — IBO Carrelage Gemini Görsel Üretim Prompt'ları

> Bu prompt'ları **Google Gemini** (Nano Banana Pro veya 2.0 Flash) ile kullan.
> Tüm görselleri **1920x1080 (16:9)** veya **1200x900 (4:3)** boyutunda üret.
> Format: Gemini çıktısını WebP olarak kaydet veya PNG çıkarıp dönüştür.
> Logo eklemek gerekirse → prompt'ta belirtildi, logoyu chate yapıştır.

---

## 🏞 HERO ARKA PLAN GÖRSELİ

### hero-bg.webp (1920x1080)

```
Professional interior photography of a modern bright living room with stunning large-format
porcelain floor tiles in light gray marble effect. The room has floor-to-ceiling windows 
letting in warm natural light. Clean minimalist furniture. The tile floor is the hero of 
the image — perfectly laid with thin grout lines, reflecting the light beautifully. 
Shot from a low angle emphasizing the floor tiles. French apartment style. 
Warm color temperature. No people. Ultra realistic, high resolution, architectural photography.
```

---

## 🛁 GALERI GÖRSELLERİ (8 adet)

### 1. sdb-moderne.webp (1200x900)
```
Professional bathroom photography. Modern renovated bathroom with walk-in Italian shower 
(douche à l'italienne). Large format dark gray tiles on the wall, lighter gray tiles on the 
floor. Frameless glass shower partition. Built-in wall niche with LED lighting. 
Brushed nickel fixtures. Clean, spa-like atmosphere. Warm ambient lighting. 
No people. Ultra realistic, interior design magazine quality photography.
```

### 2. terrasse-gres.webp (1200x900)
```
Professional exterior photography. Beautiful outdoor terrace with wood-effect porcelain 
pavement tiles (carrelage imitation bois) in warm oak color. The terrace overlooks a garden 
with green lawn. Modern outdoor furniture — a dining table with chairs. Mountain view in 
the far background (Alps/Savoie feel). Golden hour lighting. Summer atmosphere. 
No people. Ultra realistic, architectural photography, high resolution.
```

### 3. cuisine-contemporaine.webp (1200x900)
```
Professional kitchen photography. Modern French kitchen with large format floor tiles in 
concrete effect (béton ciré look). Kitchen island with dark wood base. Zellige backsplash 
tiles in emerald green behind the cooktop. White cabinets, stainless steel appliances. 
Pendant lights over island. Warm natural light from window. 
No people. Ultra realistic, interior design photography.
```

### 4. sdb-zen.webp (1200x900)
```
Professional bathroom photography. Zen-inspired bathroom renovation. Natural stone effect 
tiles on walls and floor in warm beige/sand tones. Freestanding oval bathtub. Wood-effect 
tiles on one accent wall. Green plants. Soft warm lighting. Minimalist wooden vanity. 
Japanese-inspired peaceful atmosphere. 
No people. Ultra realistic, spa-style interior photography.
```

### 5. salon-elegant.webp (1200x900)
```
Professional interior photography. Elegant French living room with luxurious marble-effect 
porcelain floor tiles in white Calacatta style with gray veining. Large format 120x60cm tiles 
seamlessly laid. Modern sofa in neutral tones. Fireplace with matching marble surround. 
High ceilings, crown molding. Natural light streaming in. 
No people. Ultra realistic, luxury interior photography.
```

### 6. escalier-exterieur.webp (1200x900)
```
Professional architectural photography. Exterior stone staircase clad with anti-slip 
porcelain tiles in natural stone effect (pierre naturelle). The stairs lead from a garden 
level to a terrace. Metal railing on one side. Green landscaping around. 
Mediterranean/Alpine house style exterior. Daylight, slight overcast for even lighting. 
No people. Ultra realistic, construction photography.
```

### 7. douche-italienne.webp (1200x900)
```
Professional bathroom photography. Close-up detail shot of a walk-in Italian shower. 
Floor: small mosaic tiles in light gray creating a gentle slope toward the linear drain. 
Walls: large format white rectified tiles with minimal grout lines. 
Rainfall showerhead mounted on the ceiling. Glass partition on one side. 
Chrome fixtures. Perfectly clean grout lines visible in detail. 
No people. Ultra realistic, detail-focused interior photography.
```

### 8. entree-couloir.webp (1200x900)
```
Professional interior photography. French apartment entrance hallway with decorative 
cement tiles (carreaux de ciment) in a geometric black and white pattern. 
The pattern creates a beautiful carpet-like effect on the floor. White walls, 
a vintage console table with a mirror above. Coat hooks on the wall. 
Warm pendant light. The tiles are the star of the image — sharp geometric patterns. 
No people. Ultra realistic, interior design photography.
```

---

## 👤 ABOUT BÖLÜMÜ GÖRSELİ

### carreleur-travail.webp (800x1000 — dikey/portrait)
```
Professional construction photography. A skilled tiler (carreleur) working on installing 
large format floor tiles in a bright room. Shot from behind/side angle — we see his hands 
carefully placing a tile with a rubber mallet. He wears professional work clothes and 
knee pads. Tools visible: tile spacers, level, trowel. The partially tiled floor shows 
the work in progress. Natural light from a nearby window. 
Face NOT clearly visible (privacy). Ultra realistic, documentary-style photography.
```

---

## 🌐 OG IMAGE (Social Media Preview)

### og-image.webp (1200x630)
```
Professional marketing banner. Split composition: left side shows a modern bathroom 
with beautiful tiles, right side shows an elegant living room floor. 
In the center-bottom area, leave a dark semi-transparent banner space for text overlay.
Clean, high-end feel. Warm lighting on both sides. 
No text in the image. Ultra realistic, marketing photography.
```

> **Not:** OG image üzerine Canva'da veya Gemini'de logo + metin eklenebilir, ama demo için bu görsel yeterli.

---

## 📋 Dosya Kaydetme Tablosu

| Prompt # | Dosya Adı | Boyut | Hedef Klasör |
|---|---|---|---|
| Hero | `hero-bg.webp` | 1920x1080 | `public/images/` |
| Galeri 1 | `sdb-moderne.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 2 | `terrasse-gres.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 3 | `cuisine-contemporaine.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 4 | `sdb-zen.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 5 | `salon-elegant.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 6 | `escalier-exterieur.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 7 | `douche-italienne.webp` | 1200x900 | `public/images/gallery/` |
| Galeri 8 | `entree-couloir.webp` | 1200x900 | `public/images/gallery/` |
| About | `carreleur-travail.webp` | 800x1000 | `public/images/` |
| OG | `og-image.webp` | 1200x630 | `public/images/` |

**Toplam: 11 görsel üretilecek**

---

## ⚠️ Önemli Notlar

1. **Logo ekleme:** Hero üzerine veya OG image'a logo gerekiyorsa → Gemini chat'ine logoyu yapıştır + "Add this logo to the top-left corner" gibi ek talimat ver.
2. **Yüz görünmesin:** Carreleur fotoğrafında yüz net olmamalı — arkadan/yandan çekim.
3. **Alp dağları hissi:** Terrasse görselinde arka planda dağ silueti olursa Savoie/Chambéry hissi verir.
4. **Format:** Gemini PNG üretir — WebP'ye dönüştürmek için: `cwebp input.png -q 85 -o output.webp` veya online converter kullan.
5. **Boyut optimizasyonu:** Her görsel 200KB altında olmalı. Gerekirse sıkıştır.
