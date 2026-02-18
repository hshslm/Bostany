# Bostany E-Commerce Demo

A premium e-commerce frontend for **Bostany** (بستاني) — Egypt's trusted food brand since 1900. This is a fully static demo showcasing products across categories like olive oil, tuna, coffee, fava beans, cheese, juices, and syrups.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS with custom design system
- **Components:** shadcn/ui (New York style)
- **Icons:** Lucide React
- **Carousel:** Embla Carousel
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Pages

- `/` — Homepage with hero, featured products, categories, and brand story
- `/shop` — Full product catalog with category filtering and search
- `/product/[slug]` — Product detail with image gallery, variants, and related products
- `/cart` — Shopping cart with quantity management
- `/checkout` — Multi-step checkout flow
- `/wishlist` — Saved products with localStorage persistence
- `/about` — Brand story, timeline, and retail partners

## Note

This is a **frontend demo with mock data**. There is no backend, database, or payment processing. All product data is statically defined and the cart/wishlist use localStorage for persistence.

---

Built by [Vector9](https://vector9.dev)
