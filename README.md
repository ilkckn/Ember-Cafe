# ☕ Ember Cafe — Web Sitesi

![Ember Cafe](https://img.shields.io/badge/MCCreative%20Studio-Portfolio%20Project-E9A56C?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/Native%20CSS-Nesting-ECE7E1?style=for-the-badge&logo=css3&logoColor=black)

> *Where every cup tells a story.*

---

## 🇹🇷 Türkçe

### 📖 Proje Hakkında

**Ember Cafe**, MCCreative Studio bünyesinde geliştirilen bir portfolyo projesidir. Sıcak, samimi ve görsel açıdan güçlü bir kafe deneyimini dijital ortama taşımayı amaçlayan bu proje; küçük ve orta ölçekli kafe işletmelerine yönelik web sitesi çözümleri sunan MCCreative Studio'nun yeteneklerini sergilemektedir.

Proje; React, Vite ve native CSS nesting kullanılarak sıfırdan geliştirilmiş olup template kullanılmamıştır.

---

### 🎯 Özellikler

- Sıcak ve organik bir renk paleti ile tasarlanmış özgün bir tasarım sistemi
- Tam responsive yapı (430px, 768px, 1024px breakpoint'leri)
- Mobil için hamburger menü ve overlay
- Smooth hover animasyonları ve geçiş efektleri
- Google Fonts entegrasyonu (Playfair Display + Plus Jakarta Sans)
- React Router ile çok sayfalı navigasyon
- Leaflet.js ile interaktif harita (Contact sayfası)
- Galeri sayfası ile görsel ağırlıklı içerik sunumu

---

### 📁 Sayfa Yapısı

```
/           → Home       — Hero, öne çıkan içerikler, CTA
/menu       → Menu       — Kahveler, tatlılar, içecekler
/story      → Story      — Kafeyi anlatan hikaye sayfası
/gallery    → Gallery    — Görsel galeri
/contact    → Contact    → İletişim bilgileri ve harita
```

---

### 🎨 Tasarım Sistemi

#### Renkler

| Token | Değer | Kullanım |
|---|---|---|
| `--caramel-t70` | `#E9A56C` | Primary accent |
| `--parchment-t95` | `#FEF9F2` | Ana background |
| `--linen-t90` | `#ECE7E1` | Section arası kontrast |
| `--caramel-t20` | `#401D06` | Koyu text |

#### Tipografi

| Token | Font | Kullanım |
|---|---|---|
| `--font-headline` | Playfair Display | Başlıklar, logo |
| `--font-body` | Plus Jakarta Sans | Body text, nav, butonlar |

---

### 🛠️ Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|---|---|---|
| React | 19 | UI framework |
| Vite | 6 | Build tool |
| React Router | v7 | Sayfa yönetimi |
| Native CSS Nesting | — | Stil yapısı |
| Leaflet.js | — | Interaktif harita |
| Google Fonts | — | Tipografi |

---

### 🚀 Kurulum

```bash
# Repoyu klonla
git clone https://github.com/kullaniciadi/ember-cafe.git

# Proje dizinine gir
cd ember-cafe

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

---

### 📂 Proje Yapısı

```
ember-cafe/
├── public/
│   └── logo/
│       └── logo.png
├── src/
│   ├── components/
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── pages/
│   │   ├── Home/
│   │   ├── Menu/
│   │   ├── Story/
│   │   ├── Gallery/
│   │   └── Contact/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

### 👨‍💻 Geliştirici

**Musa Cekcen** — Founder & Frontend Developer  
[MCCreative Studio](https://www.mccreativestudio.de) · Efringen-Kirchen, Deutschland

---

---

## 🇬🇧 English

### 📖 About

**Ember Cafe** is a portfolio project developed under MCCreative Studio. It brings a warm, inviting, and visually rich cafe experience to the digital world — showcasing the capabilities of MCCreative Studio in delivering web solutions for small and mid-sized local businesses.

Built from scratch using React, Vite, and native CSS nesting. No templates used.

---

### 🎯 Features

- Custom design system with a warm, organic color palette
- Fully responsive layout (breakpoints: 430px, 768px, 1024px)
- Mobile hamburger menu with overlay
- Smooth hover animations and transition effects
- Google Fonts integration (Playfair Display + Plus Jakarta Sans)
- Multi-page navigation with React Router
- Interactive map with Leaflet.js (Contact page)
- Visual-first gallery page

---

### 📁 Page Structure

```
/           → Home       — Hero, featured content, CTA
/menu       → Menu       — Coffees, desserts, drinks
/story      → Story      — The story behind the cafe
/gallery    → Gallery    — Visual gallery
/contact    → Contact    — Location info and map
```

---

### 🎨 Design System

#### Colors

| Token | Value | Usage |
|---|---|---|
| `--caramel-t70` | `#E9A56C` | Primary accent |
| `--parchment-t95` | `#FEF9F2` | Main background |
| `--linen-t90` | `#ECE7E1` | Section contrast |
| `--caramel-t20` | `#401D06` | Dark text |

#### Typography

| Token | Font | Usage |
|---|---|---|
| `--font-headline` | Playfair Display | Headings, logo |
| `--font-body` | Plus Jakarta Sans | Body text, nav, buttons |

---

### 🛠️ Tech Stack

| Technology | Version | Description |
|---|---|---|
| React | 19 | UI framework |
| Vite | 6 | Build tool |
| React Router | v7 | Page routing |
| Native CSS Nesting | — | Styling |
| Leaflet.js | — | Interactive map |
| Google Fonts | — | Typography |

---

### 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ember-cafe.git

# Navigate to project directory
cd ember-cafe

# Install dependencies
npm install

# Start development server
npm run dev
```

---

### 📂 Project Structure

```
ember-cafe/
├── public/
│   └── logo/
│       └── logo.png
├── src/
│   ├── components/
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── pages/
│   │   ├── Home/
│   │   ├── Menu/
│   │   ├── Story/
│   │   ├── Gallery/
│   │   └── Contact/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

### 👨‍💻 Developer

**Musa Cekcen** — Founder & Frontend Developer  
[MCCreative Studio](https://www.mccreativestudio.de) · Efringen-Kirchen, Germany

---

*Crafted with care by [MCCreative Studio](https://www.mccreativestudio.de)*