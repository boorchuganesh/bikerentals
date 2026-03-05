# 🚴 CycleGo — Premium Bike Rental Platform

A complete, production-grade React bike rental app with 5 full pages and no backend required.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

App will open at **http://localhost:3000**

---

## 📁 Project Structure

```
cyclego/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BikeIllustration.jsx   # SVG bike drawings per type
│   │   ├── BikeModal.jsx          # Bike detail popup
│   │   ├── Modal.css
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── Navbar.css
│   │   └── Toast.jsx              # Notification toasts
│   ├── data/
│   │   └── bikes.js               # All mock data (bikes, rides, users)
│   ├── pages/
│   │   ├── Home.jsx + Home.css          # Landing page
│   │   ├── Listings.jsx + Listings.css  # Browse & filter bikes
│   │   ├── Booking.jsx + Booking.css    # 3-step booking flow
│   │   ├── Dashboard.jsx + Dashboard.css # Rider dashboard
│   │   └── Admin.jsx + Admin.css        # Admin panel
│   ├── App.jsx                    # Root component & state
│   ├── index.js                   # Entry point
│   └── index.css                  # Global styles & CSS variables
└── package.json
```

---

## 🎯 Features

| Page | Features |
|------|----------|
| **Home** | Hero, stats, feature grid, categories, testimonials, CTA |
| **Browse Bikes** | Filter by type, sort by price/rating, wishlist, detail modal, battery indicator |
| **Booking** | 3-step wizard, bike selector, form validation, price calculator, booking ID |
| **My Rides** | Profile, active ride tracker, ride history table, recommendations |
| **Admin** | Stats cards, revenue chart, fleet management, live activity feed, hub status, user management |

---

## 🛠 Tech Stack

- **React 18** — UI framework
- **CSS Modules** — Per-page styles
- **Custom SVG** — Bike illustrations (no image files needed)
- **Google Fonts** — Bebas Neue + DM Sans

---

## 🎨 Design System

| Variable | Value |
|----------|-------|
| `--accent` | `#00d4aa` (Teal) |
| `--accent2` | `#ff4d6d` (Red) |
| `--accent3` | `#f5c518` (Gold) |
| `--bg` | `#0a0a0f` (Near black) |
| `--text` | `#f0f0f5` |

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `build/` folder — ready to deploy on Netlify, Vercel, or any static host.

---

Made with ❤️ by CycleGo
