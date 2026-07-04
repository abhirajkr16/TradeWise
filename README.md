#TradeWise

## Overview

A React-based frontend project modeled after the Zerodha landing page. The project is currently in early development. The component structure and page layout have been scaffolded, with active development on the home page. Most page-level components are placeholders and are yet to be implemented.

This project is being built to practice React fundamentals, including component-based architecture, JSX, and project organization.

## Current Status

The home page composition is set up with named components imported and rendered in sequence. The individual sections are scaffolded as placeholder components and are being built out incrementally.

## Tech Stack

- React 19
- JavaScript (ES6+)
- HTML5
- CSS3 (default CRA styles, global reset in `index.css`)
- Create React App (bootstrapped with `react-scripts` 5.0.1)

## What Is Implemented

- Project bootstrapped with Create React App
- `HomePage.js` — composes the full home page by rendering child sections in order
- Component files created and imported for: `Navbar`, `Hero`, `Awards`, `Stats`, `Pricing`, `Education`, `OpenAccount`, `Footer`
- Additional page directories scaffolded: `about`, `pricing`, `products`, `signup`, `support`

## Work in Progress

The following components exist as placeholder files and contain no real UI yet:

- `Navbar.js` — renders `<h1>Navbar</h1>`
- `Hero.js` — renders `<h1>Hero</h1>`
- `Award.js` — renders `<h1>Awards</h1>`
- `Stats.js` — renders `<h1>Stats</h1>`
- `Pricing.js` — renders `<h1>Pricing</h1>`
- `Education.js` — renders `<h1>Education</h1>`
- `OpenAccount.js` — renders `<h1>OpenAccount</h1>`
- `Footer.js` — renders `<h1>Footer</h1>`

The following page directories are scaffolded with empty files:

- `about/` — `AboutPage.js`, `Hero.js`, `Team.js` (all empty)
- `pricing/` — `PringPage.js`, `Hero.js` (empty), `Brokerage.js` (placeholder only)
- `products/` — `Hero.js`, `LeftSection.js`, `RightSection.js`, `Universe.js` (all empty)
- `signup/` — `Signup.js` (empty)
- `support/` — `SupportPage.js`, `Hero.js`, `CreateTicket.js` (all empty)

There is no routing configured. Only the home page is rendered at this time.

## Prerequisites

- Node.js (v16 or later recommended)
- npm

## Installation

```bash
git clone <repository-url>
cd frontend
npm install
```

## Running Locally

```bash
npm start
```

The app will start at `http://localhost:3000` by default.

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── index.js               # App entry point, renders HomePage
    ├── index.css              # Global CSS reset
    └── landing_page/
        ├── Navbar.js          # Placeholder
        ├── Footer.js          # Placeholder
        ├── OpenAccount.js     # Placeholder
        ├── home/
        │   ├── HomePage.js    # Composes all home page sections
        │   ├── Hero.js        # Placeholder
        │   ├── Award.js       # Placeholder
        │   ├── Stats.js       # Placeholder
        │   ├── Pricing.js     # Placeholder
        │   └── Education.js   # Placeholder
        ├── about/             # Scaffolded, files empty
        ├── pricing/           # Scaffolded, files empty
        ├── products/          # Scaffolded, files empty
        ├── signup/            # Scaffolded, files empty
        └── support/           # Scaffolded, files empty
```

## Notes

- No routing library is installed. Multi-page navigation is planned but not yet implemented.
- The backend directory exists in the repository root but is currently empty.
- No API integrations, authentication, or database connections are present at this stage.
