# Valtech Front Challenge

A [Next.js 14](https://nextjs.org/) (App Router) app: JSON-driven pages (typed content blocks), styled with Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) **18.x** or **20.x** (LTS recommended)
- [npm](https://www.npmjs.com/) (bundled with Node)

## Setup and run

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Other useful commands

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build (after `build`) |
| `npm run lint`  | Run ESLint                           |

## Content and routes

- Data: `src/data/` (`index.json` for the homepage, `article.json` for the article page).
- Homepage: `/`
- Article page: `/article` (dynamic segment in `src/app/[type]/page.tsx`).

Pages are rendered **on the server per request** (`dynamic = 'force-dynamic'`), with JSON loaded from the filesystem on the server.

## Tech stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS
- `next/image` — in production, the **`sharp`** package is recommended for image optimization (already listed as a dependency; if installation fails, check your Node version and [sharp’s install guide](https://sharp.pixelplumbing.com/install))

## Design

[Figma — Valtech Tech Challenge](https://www.figma.com/design/VSzml7sK3UraIJpYwGg9eQ/Valtech-Tech-Challenge?node-id=0-1&t=IpHy7qL3ajJmN2W3-1)

## Repository layout (overview)

```
src/
  app/           # routes, layout, metadata
  components/    # reusable UI
  data/          # JSON + page loading
  features/      # content blocks (Hero, CardGrid, Carousel, etc.)
  types/         # TypeScript types for content
```
