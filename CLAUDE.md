# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bostany (بستاني) is an e-commerce **frontend demo** for **EL BOSTANY Co.**, a 125+ year-old Egyptian food conglomerate (Est. 1900, Damietta). The platform serves the Egyptian market with ~30 SKUs across 8 categories under 6 sub-brands (Bostany, King, TopValue, Manutti, Prego, Brigo, Delice).

## Key Reference Files

**Read these before building each section:**

| File | Purpose |
|------|---------|
| `/bostany-ecommerce-plan.md` | Full project plan: brand info, product catalog (~30 SKUs), sitemap, page-by-page specs, checkout flow, data models, payment/shipping details |
| `/bostany-design-system.html` | Interactive design system reference — open in browser to preview colors, typography, and component patterns |
| `/IMAGE-MAP.md` | Product-to-image path mapping with exact TypeScript snippets for mock data |
| `/bostany-images-web/` | Source image assets (copied to `/public/images/` during setup) |

## Tech Stack

- **Next.js 16+** (App Router, TypeScript) on **Vercel**
- **Tailwind CSS** + **shadcn/ui**
- **Static mock data** in TypeScript files (no database for demo — migrate to Supabase later)
- Parent project instructions at `/Volumes/SOVEREIGN/projects/CLAUDE.md`

## Design System

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Red | `#C41E24` | CTAs, logo, primary actions |
| Red Hover | `#A31920` | Hover states for red |
| Heritage Gold | `#C5993A` | Accents, badges, premium elements |
| Deep Gold | `#9B7730` | Hover/depth for gold |
| Cream | `#F5F0EA` | Page background |
| Warm White | `#FAFAF7` | Cards, surfaces |
| Charcoal | `#2D2D2D` | Primary text |
| Slate | `#6B6B6B` | Secondary text |
| Light Border | `#E8E2DA` | Borders, dividers |

**Category accent colors:** Olive Green `#4A5D23`, Coffee Brown `#4A2C1A`, Cheese Gold `#E8A825`, Syrup Blue `#1B3A7B`, Bean Red `#D4382C`, Corn Green `#2D8B47`, Juice Orange `#E87D1E`

### Typography
- **EN Display:** Playfair Display (serif — heritage, editorial)
- **EN Body:** DM Sans (clean, modern)
- **AR Display:** Tajawal 800 (bold Kufi-style)
- **AR Body:** Tajawal 400

### Design Tone
"Heritage Meets Modern Pantry" — warm, inviting, slightly editorial. Cream backgrounds, gold accents, serif headings. NOT cold/tech/startup. NOT cheap/discount. Think well-curated food magazine meets clean e-commerce.

### Component Patterns
- **Product cards:** White bg, 14px radius, warm shadow, product image on soft gradient, brand badge pill, bilingual name, size, price in EGP, red add-to-cart button, wishlist heart
- **Buttons:** 8px radius — Primary (red), Secondary (outlined charcoal), Gold (heritage), Ghost (red text)
- **Shadows:** sm `0 1px 3px rgba(0,0,0,0.06)`, md `0 4px 12px rgba(0,0,0,0.08)`, lg `0 12px 32px rgba(0,0,0,0.1)`
- **Heritage badge:** Gold circular "Est. 1900" element — use throughout the site

## Architecture Decisions

### Bilingual (AR/EN)
RTL-first design. Arabic and English must feel equally native. URL structure: `/en/...` and `/ar/...`. All product data uses `_en`/`_ar` field pairs (e.g., `name_en`, `name_ar`, `slug_en`, `slug_ar`).

### Egypt-Specific Commerce
- **Payment methods:** Cash on Delivery (primary, COD fee EGP 10), Card on Delivery, Online (Paymob), Mobile Wallet (Vodafone Cash, Orange, etc.)
- **Shipping:** Bosta API — COD support, all 27 governorates, 2-4 day delivery
- **Auth:** Phone number + OTP preferred over email
- **Guest checkout** is critical (many first-time online buyers in Egypt)
- **WhatsApp integration** — floating button + order sharing
- **Free delivery** over EGP 300
- **Address format:** Governorate → City/Area → Street → Building/Floor/Apt → Landmark

### Data Model
Core entities from plan §11: **Product** (bilingual slugs, variants with size/price/sku/stock/weight), **Brand** (with logo + color), **Category** (hierarchical with parent_id, accent color), **Order** (guest-friendly via nullable user_id, 6 order statuses), **User** (with addresses[], wishlist[], preferred_language).

### Image Assets
Product images extracted from company PDF (studio backgrounds, not transparent). All Manutti syrup products share one group image (`manutti-lineup.jpeg`). See `IMAGE-MAP.md` for exact path mappings to use in mock data.

## Sitemap (from plan §4)

```
/ .................. Homepage (hero, categories, featured, heritage, retailers)
/shop .............. All Products (filters, sort, grid)
/category/:slug .... Category pages (tuna, oils, canned-goods, coffee, cheese-dairy, juices, syrups)
/product/:slug ..... Product detail (gallery, variants, add-to-cart, nutritional info)
/cart .............. Shopping cart
/checkout .......... Single-page 3-section checkout
/account ........... Orders, addresses, profile, wishlist
/about ............. Heritage story (timeline 1900→present)
/brands ............ Brand sub-pages
/contact ........... Contact form + social
```

## Performance Targets
- LCP < 2.5s (Egyptian 4G)
- Initial JS bundle < 200KB
- WebP images, lazy loading, CDN
