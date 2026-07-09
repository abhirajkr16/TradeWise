# Zerodha Clone — Frontend

A React-based frontend clone of the [Zerodha](https://zerodha.com) landing experience, built as a full-stack learning project. The frontend currently consists of fully implemented public-facing landing pages with React Router navigation, reusable shared components, and a responsive Bootstrap layout.

> **Note:** This is an independent learning project and is not affiliated with or endorsed by Zerodha Broking Ltd.

---

## Current Progress

### ✔ Phase 1 — Landing Pages Completed

All six public-facing landing pages are implemented with real UI, real content, and full navigation between them.

### 🚧 Phase 2 — Dashboard (In Progress)

The `backend/` directory is scaffolded but currently empty. Dashboard routes, protected views, and user-facing account pages are planned for this phase.

### ⏳ Phase 3 — Backend & Database (Planned)

### ⏳ Phase 4 — AI Features (Planned)

### ⏳ Phase 5 — Deployment (Planned)

---

## Tech Stack

| Technology | Version | Usage |
|---|---|---|
| React | ^19.2.7 | UI framework |
| React DOM | ^19.2.7 | DOM rendering |
| React Router DOM | ^6.30.4 | Client-side routing |
| React Scripts (CRA) | 5.0.1 | Build toolchain (Create React App) |
| Bootstrap | 5.3.8 (CDN) | Responsive grid and utility classes |
| Font Awesome | 7.0.1 (CDN) | Icons (brands, solid, regular) |
| CSS3 | — | Custom global styles via `index.css` |
| JavaScript | ES6+ | Component logic |

> Bootstrap and Font Awesome are loaded via CDN in `public/index.html`. They are **not** installed as npm packages.

---

## Features Implemented

- ✅ React application bootstrapped with Create React App
- ✅ Client-side routing via React Router v6 (`BrowserRouter`, `Routes`, `Route`)
- ✅ Shared layout with persistent `Navbar` and `Footer` across all routes
- ✅ Home page with Hero, Awards, Stats, Pricing preview, Education, and OpenAccount sections
- ✅ About page with company Hero and Team (Founder profile) sections
- ✅ Products page with alternating `LeftSection`/`RightSection` product cards (Kite, Console, Coin, Kite Connect API, Varsity Mobile) and a Zerodha Universe partner showcase
- ✅ Pricing page with brokerage tiers, pricing cards, and a detailed Brokerage charges section
- ✅ Support page with a styled hero section (search input, quick links, featured articles) and a categorised CreateTicket section
- ✅ Signup page — route exists and renders (UI is a stub; no form or authentication logic)
- ✅ 404 Not Found page for all unmatched routes (`path="*"`)
- ✅ `OpenAccount` reusable CTA component (used across Home and Pricing pages)
- ✅ Responsive layout using Bootstrap 5 grid classes
- ✅ Font Awesome icons used throughout (social links in Footer, category icons in Support)
- ✅ Static image assets served from `public/media/images/`

---

## Routing Structure

Routing is configured in `src/index.js` using React Router v6. The `Navbar` and `Footer` are rendered outside the `<Routes>` block, making them persistent across all pages.

| Path | Component | Status |
|---|---|---|
| `/` | `HomePage` | ✅ Implemented |
| `/about` | `AboutPage` | ✅ Implemented |
| `/product` | `ProductPage` | ✅ Implemented |
| `/pricing` | `PringPage` | ✅ Implemented |
| `/support` | `SupportPage` | ✅ Implemented |
| `/signup` | `Signup` | ⚠️ Route exists — UI is a stub (`<h1>Signup</h1>`) |
| `*` | `NotFound` | ✅ 404 page implemented |

---

## Project Structure

```
ZERODHA/
├── backend/                        # Empty — planned for Phase 2
└── frontend/
    ├── public/
    │   ├── index.html              # App shell; loads Bootstrap 5 & Font Awesome via CDN
    │   ├── manifest.json
    │   ├── robots.txt
    │   └── media/
    │       └── images/             # 25 static image assets (SVG, PNG, JPG)
    ├── package.json
    └── src/
        ├── index.js                # App entry point; BrowserRouter + Routes + Navbar + Footer
        ├── index.css               # Global CSS reset + support page custom styles
        └── landing_page/
            ├── Navbar.js           # Top navigation bar with React Router Link elements
            ├── Footer.js           # Site-wide footer with links, social icons, legal text
            ├── OpenAccount.js      # Reusable CTA section ("Open a Zerodha account")
            ├── NotFound.js         # 404 page rendered on unmatched routes
            ├── home/
            │   ├── HomePage.js     # Composes: Hero, Awards, Stats, Pricing, Education, OpenAccount
            │   ├── Hero.js         # Hero banner with homeHero.png and Signup CTA
            │   ├── Award.js        # "Largest stock broker in India" with asset classes list
            │   ├── Stats.js        # "Trust with confidence" section with ecosystem.png
            │   ├── Pricing.js      # Pricing summary cards (₹0 equity, ₹20 intraday)
            │   └── Education.js    # Varsity and TradingQ&A education section
            ├── about/
            │   ├── AboutPage.js    # Composes: Hero, Team
            │   ├── Hero.js         # Company founding story in two-column layout
            │   └── Team.js         # Founder profile: Nithin Kamath (photo, bio, links)
            ├── products/
            │   ├── ProductPage.js  # Composes: Hero, LeftSection x3, RightSection x2, Universe
            │   ├── Hero.js         # "Technology" heading with sub-copy
            │   ├── LeftSection.js  # Reusable product card (image left, text right)
            │   ├── RightSection.js # Reusable product card (text left, image right)
            │   └── Universe.js     # Partner platform grid (Smallcase, Streak, Sensibull, etc.)
            ├── pricing/
            │   ├── PringPage.js    # Composes: Hero, OpenAccount, Brokerage
            │   ├── Hero.js         # Pricing tiers: Free equity, ₹20 intraday, Free MF
            │   └── Brokerage.js    # Brokerage calculator link + additional charges list
            ├── support/
            │   ├── SupportPage.js  # Composes: Hero, CreateTicket
            │   ├── Hero.js         # Search bar, quick links, featured articles (custom CSS)
            │   └── CreateTicket.js # Categorised support topic grid (6 categories, 30+ links)
            └── signup/
                └── Signup.js       # Stub — renders <h1>Signup</h1> only
```

---

## Pages

### Home (`/`)

Composed of six sections in `HomePage.js`:

1. **Hero** — Full-width banner image (`homeHero.png`) with headline "Invest in everything" and a Signup CTA button
2. **Awards** — "Largest stock broker in India" with a two-column asset class list and press logos
3. **Stats** — "Trust with confidence" four-point breakdown alongside the ecosystem image
4. **Pricing** — Inline pricing summary cards (₹0 equity delivery, ₹20 intraday/F&O)
5. **Education** — Varsity and TradingQ&A links with accompanying illustration
6. **OpenAccount** — Shared CTA: "Open a Zerodha account" with a Sign Up Now button

### About (`/about`)

- **Hero** — Company founding story copy in a two-column layout ("We pioneered the discount broking model in India")
- **Team** — Founder section featuring Nithin Kamath with circular profile photo, bio, and social links

### Products (`/product`)

- **Hero** — "Technology — Sleek, modern and intuitive trading platforms"
- **Product cards** using alternating `LeftSection` / `RightSection` layouts:
  - **Kite** — Flagship trading platform (App Store & Play Store badges)
  - **Console** — Central dashboard for analytics and reports
  - **Coin** — Direct mutual funds platform (App Store & Play Store badges)
  - **Kite Connect API** — Developer HTTP/JSON API platform
  - **Varsity Mobile** — Mobile stock market education app (App Store & Play Store badges)
- **Universe** — Partner platform grid: Smallcase, Streak, Sensibull, Zerodha Fund House, GoldenPi, Ditto

### Pricing (`/pricing`)

- **Hero** — Three pricing tier cards: Free Equity Delivery, ₹20 Intraday & F&O, Free Direct MF
- **OpenAccount** — Shared CTA component
- **Brokerage** — Brokerage calculator link + detailed list of additional charges

### Support (`/support`)

- **Hero** — Blue-background hero with a search input, quick navigation links, and a Featured articles list; fully responsive via custom media queries in `index.css`
- **CreateTicket** — Six-category support topic grid:
  - Account Opening (7 sub-links)
  - Your Zerodha Account — profile & credentials (5 sub-links)
  - Trading — margins, platforms, FAQs (9 sub-links)
  - Funds — adding, withdrawing, eMandates (4 sub-links)
  - Console — reports, portfolio, ledger (6 sub-links)
  - Coin — mutual funds, SIP, portfolio (8 sub-links)

### Signup (`/signup`)

⚠️ **Work in Progress** — The route is active and renders a `<h1>Signup</h1>` stub. No form, validation, or authentication logic is implemented.

---

## Shared Components

| Component | File | Description |
|---|---|---|
| `Navbar` | `landing_page/Navbar.js` | Bootstrap navbar with logo (SVG) and React Router `<Link>` navigation to all routes; collapses on mobile |
| `Footer` | `landing_page/Footer.js` | Four-column footer with company/support/account links, Font Awesome social icons (X, Facebook, Instagram, LinkedIn, Telegram), and regulatory disclaimer text |
| `OpenAccount` | `landing_page/OpenAccount.js` | Centred CTA section reused on Home and Pricing pages |
| `NotFound` | `landing_page/NotFound.js` | Minimal 404 page — "404 Not Found" heading with descriptive paragraph |

---

## Installation

**Prerequisites:** Node.js v16 or later, npm

```bash
# Clone the repository
git clone <repository-url>
cd ZERODHA/frontend

# Install dependencies
npm install
```

---

## Running Locally

```bash
npm start
```

The app starts at `http://localhost:3000` by default.

---

## Dependencies (from `package.json`)

```json
{
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "react-router-dom": "^6.30.4",
  "react-scripts": "5.0.1",
  "@testing-library/react": "^16.3.2",
  "@testing-library/jest-dom": "^6.9.1",
  "@testing-library/dom": "^10.4.1",
  "@testing-library/user-event": "^13.5.0",
  "web-vitals": "^2.1.4"
}
```

---

## Upcoming Features

The following features are planned for future development phases:

**Phase 2 — Dashboard**
- User Registration form (Signup page full implementation)
- Login Authentication
- Protected Routes
- Dashboard layout
- Portfolio Management
- Holdings view
- Orders view
- Funds management
- Profile Management

**Phase 3 — Backend & Database**
- Node.js / Express backend (in the existing `backend/` directory)
- RESTful API development
- Database integration (MongoDB or PostgreSQL)
- JWT-based authentication

**Phase 4 — AI Features**
- AI-based Portfolio Insights
- AI Chat Assistant

**Phase 5 — Deployment**
- Production build and cloud deployment

---

## Roadmap

| Phase | Description | Status |
|---|---|---|
| ✔ Phase 1 | Landing Pages (Home, About, Products, Pricing, Support, Signup stub) | **Complete** |
| 🚧 Phase 2 | Dashboard & User Account Pages | **In Progress** |
| ⏳ Phase 3 | Backend API & Database | Planned |
| ⏳ Phase 4 | AI-powered Features | Planned |
| ⏳ Phase 5 | Deployment | Planned |

---

## Notes

- The `backend/` directory at the repository root exists but is currently empty — no server, API, or database logic is implemented.
- Bootstrap 5.3.8 and Font Awesome 7.0.1 are loaded from CDN, not from npm.
- The pricing page file is named `PringPage.js` (typo in filename) but functions correctly — the exported component is `PricingPage`.
- All image assets are static files located in `public/media/images/` and referenced by relative path (e.g. `media/images/homeHero.png`).
- No environment variables, `.env` files, API keys, or backend connections are present.
