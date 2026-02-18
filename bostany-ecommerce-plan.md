# Bostany E-Commerce Platform — Master Plan & Design Brief

---

## 1. Brand Intelligence Report

### Company Profile
- **Legal Name:** EL BOSTANY Co. for Investment and Trade Development
- **Brand Name:** Bostany (بستاني)
- **Founded:** 1900, Damietta, Egypt
- **Founder:** Abbas El Bostany (great-grandfather of current owners)
- **Heritage:** 125+ years — one of the oldest family-owned food companies in Egypt
- **Core Identity:** Quality, trust, generational expertise
- **International Partners:** Thailand-based companies (likely for tuna/rice bran oil sourcing)
- **Contact:** bostany.co@gmail.com
- **Instagram:** @bostany.co
- **Facebook:** Active presence

### Market Position
Bostany is a **multi-brand, multi-category food conglomerate** positioned in the value-to-mid-tier segment of the Egyptian FMCG market. They operate across **4 distinct sub-brands** (Bostany, King, TopValue, Manutti) plus distribute partner brands (Prego, Brigo/بريجو, Delice/ديليس). Their retail presence is strong — available at **14+ major retailers** from premium (Spinneys, Gourmet) to mass-market (Carrefour, Seoudi, Metro) and digital (Talabat, Breadfast).

### Retail Partners (Where to Find Us)
| Tier | Retailers |
|------|-----------|
| Premium | Spinneys, Gourmet Food Stores, The Grocer |
| Mass Market | Carrefour, Hyper1, Metro, Seoudi, Mahmoud Elfar |
| Regional | Oscar Grand Stores, Flamingo Hypermarket, Royal House, Al Masrya |
| Digital / Delivery | Talabat, Breadfast |
| Online Marketplace | LuLu Egypt (confirmed via search) |

### Competitive Landscape
- **Direct:** Faragalla, El Rashidi El Mizan, local FMCG brands
- **Marketplace competition:** Amazon.eg, Noon, Jumia, Breadfast, Talabat grocery
- **Advantage:** Heritage story (125 years), diverse multi-category catalog, existing retail footprint, own-brand manufacturing

---

## 2. Complete Product Catalog

### Brand Architecture
```
EL BOSTANY Co. (Parent)
├── Bostany (بستاني) — Flagship brand: Tuna, Olive Oil, Fava Beans, Corn
├── King — Rice Bran Oil
├── TopValue (توب فاليو) — Instant Coffee
├── Manutti — Gourmet Syrups (Made in Egypt)
├── Prego — Feta Cheese, Cocktail Juice
├── Brigo (بريجو) — Cheese Paste, Milk, Juices
└── Delice (ديليس) — Cream Spread, White Cheese, Milk Powder
```

### Full Product Matrix

| Category | Product | Brand | Variants/Sizes | Key Claims |
|----------|---------|-------|----------------|------------|
| **Canned Tuna** | Tuna Chunks | Bostany | Standard can | Light meat, GMO-free soy oil |
| | Spicy Tuna Chunks | Bostany | Standard can | With hot chillies |
| **Rice Bran Oil** | Rice Bran Oil | King | 1L, 2L | Oryzanol 8,000 ppm, high smoke point 240°C, heart-healthy |
| **Olive Oil** | Virgin Olive Oil | Bostany | 250ml, 500ml | Cold pressed |
| | Extra Virgin Olive Oil | Bostany | 250ml, 500ml | Cold pressed |
| **Canned Vegetables** | Plain Fava Beans (Medammes) | Bostany | Standard can | 100% natural, no artificial flavors, gluten free, high protein & fiber |
| | Whole Kernel Sweet Corn | Bostany | Standard can | 100% natural, no artificial flavors, gluten free |
| **Coffee** | Instant Coffee | TopValue | 100g, 200g | Premium quality |
| | Gold Instant Coffee | TopValue | 100g, 200g | Premium quality |
| **Cheese** | Feta White Cheese | Prego | 500g | Contains vegetable oils |
| | Cheese Paste | Brigo | Standard pack | Processed cheese with vegetable oils |
| | Cream Spread | Delice | Jar | Cream cheese spread |
| | White Cheese | Delice | 500g | Fresh, natural |
| **Milk** | Instant Full Cream Milk Powder | Delice | Pouch | Vitamins A & D, Iron, Zinc, Calcium |
| | UHT Milk | Brigo | 200ml carton | Natural |
| **Juices** | Apple Juice | Brigo | 200ml | — |
| | Orange Juice | Brigo | 200ml | — |
| | Guava Juice | Brigo | 200ml | — |
| | Mango Juice | Brigo | 200ml | — |
| | Cocktail Nectar | Prego | 200ml | — |
| **Syrups** | Mint Syrup | Manutti | 1L bottle | Gourmet flavored, extracted |
| | Hazelnut Syrup | Manutti | 1L bottle | — |
| | Peach Puree | Manutti | 1L bottle | Pure flavor |
| | Pineapple Puree | Manutti | 1L bottle | — |
| | Blue Curacao Syrup | Manutti | 1L bottle | Gourmet flavored, extracted |
| | Blueberry Puree | Manutti | 1L bottle | — |
| | Raspberry Syrup | Manutti | 1L bottle | Gourmet flavored, extracted |
| | Mixed Berries Puree | Manutti | 1L bottle | — |

**Total SKUs: ~30 products across 8 categories**

---

## 3. Design System & Visual Identity

### Brand Colors (Extracted from Logo & Packaging)
```css
:root {
  /* Primary — from Bostany logo */
  --bostany-red: #C41E24;        /* Primary CTA, logo red */
  --bostany-gold: #C5993A;       /* Heritage accent, premium feel */
  --bostany-dark-gold: #9B7730;  /* Depth accent */

  /* Neutrals */
  --cream: #F5F0EA;              /* Background — warm, inviting (from PDF bg) */
  --warm-white: #FAFAF7;         /* Cards, surfaces */
  --charcoal: #2D2D2D;           /* Primary text */
  --slate: #6B6B6B;              /* Secondary text */

  /* Category Accents (from packaging colors) */
  --olive-green: #4A5D23;        /* Olive oil category */
  --coffee-brown: #4A2C1A;       /* Coffee category */
  --cheese-gold: #E8A825;        /* Dairy/cheese category — from yellow bg */
  --syrup-blue: #1B3A7B;         /* Manutti syrups */
  --bean-red: #D4382C;           /* Fava beans/canned goods */
  --corn-green: #2D8B47;         /* Sweet corn */
  --juice-orange: #E87D1E;       /* Juice category */
}
```

### Typography Recommendations
```
Heading / Display:  "Playfair Display" or "Cormorant Garamond"
                    → Heritage, trust, premium — reflects 125-year legacy

Body / UI:          "DM Sans" or "Source Sans 3"
                    → Clean, modern, excellent Arabic companion availability

Arabic Heading:     "Tajawal" (Bold) or "Noto Kufi Arabic"
                    → Pairs well with serif English, distinctly Egyptian

Arabic Body:        "IBM Plex Sans Arabic" or "Tajawal"
                    → Readable, modern, professional
```

### Design Tone
**"Heritage Meets Modern Pantry"** — The site should feel like a trusted, century-old family brand that has evolved with the times. Think warm, inviting, slightly editorial — like a well-curated food magazine meets a clean e-commerce experience. NOT cold/tech/startup. NOT cheap/discount. The warmth of the cream background from their PDF catalog is a strong starting point.

### Design Principles
1. **Warm & Inviting** — Cream/off-white backgrounds, warm shadows, rounded but not childish
2. **Heritage Confidence** — Serif headings, gold accents, "Est. 1900" badge as design element
3. **Product-Forward** — Products are heroes. Large product photography. Clean white or soft gradient product cards
4. **Bilingual Native** — RTL/LTR must feel equally designed, not an afterthought
5. **Category Color-Coded** — Each product category has a subtle accent color (from packaging)

---

## 4. Information Architecture & Sitemap

```
bostany.co (or bostany.eg)
│
├── / (Homepage)
│   ├── Hero Banner (rotating promos / seasonal)
│   ├── Shop by Category (visual grid)
│   ├── Featured Products / Bestsellers
│   ├── Heritage Story Banner ("Since 1900")
│   ├── Where to Find Us (retail partners)
│   └── Newsletter Signup
│
├── /shop (All Products)
│   ├── Filter: Category, Brand, Size, Price
│   ├── Sort: Popular, Price, New Arrivals
│   └── Grid/List toggle
│
├── /category/:slug
│   ├── /tuna
│   ├── /oils (sub: olive-oil, rice-bran-oil)
│   ├── /canned-goods (sub: fava-beans, sweet-corn)
│   ├── /coffee
│   ├── /cheese-dairy (sub: cheese, milk)
│   ├── /juices
│   └── /syrups
│
├── /product/:slug (Product Detail Page)
│   ├── Image gallery (multiple angles)
│   ├── Name, brand badge, description
│   ├── Size/variant selector
│   ├── Price + Add to Cart
│   ├── Nutritional info (collapsible)
│   ├── Related products
│   └── "Also available at" retail logos
│
├── /cart (Shopping Cart)
│   ├── Item list with qty adjust
│   ├── Promo code input
│   ├── Order summary
│   └── Proceed to Checkout
│
├── /checkout (Multi-step or Single-page)
│   ├── Step 1: Shipping Information
│   ├── Step 2: Payment Method
│   ├── Step 3: Review & Confirm
│   └── /checkout/success (Order Confirmation)
│
├── /account
│   ├── /orders (Order history + tracking)
│   ├── /addresses
│   ├── /profile
│   └── /wishlist
│
├── /about (Heritage Story)
│   ├── Timeline: 1900 → Present
│   ├── Family legacy narrative
│   ├── International partnerships
│   └── Quality commitment
│
├── /brands
│   ├── /bostany
│   ├── /king
│   ├── /topvalue
│   ├── /manutti
│   ├── /prego
│   ├── /brigo
│   └── /delice
│
├── /contact
│   ├── Contact form
│   ├── Email, social links
│   └── Business inquiry section
│
├── /faq
├── /shipping-policy
├── /return-policy
├── /privacy-policy
└── /terms
```

---

## 5. Page-by-Page Design Specifications

### 5.1 Homepage

**Hero Section**
- Full-width hero with a warm lifestyle image (family kitchen/Egyptian breakfast table with Bostany products)
- Overlaid: "Trusted Since 1900" badge (gold, circular, elegant)
- Headline: "من بستان العيلة لبيتك" (From our family's garden to your home)
- CTA: "تسوق الآن" / "Shop Now" — Red button with gold hover
- Secondary subtle CTA: "اعرف قصتنا" / "Our Story"

**Shop by Category**
- 8 visual cards in a 4×2 grid (2×4 on mobile)
- Each card: Category name + hero product image + subtle category color accent
- Cards: Tuna, Oils, Canned Goods, Coffee, Cheese & Dairy, Juices, Syrups, All Products
- Hover: Slight lift + gold border glow

**Featured Products Carousel**
- Horizontal scroll, 4 products visible on desktop
- Product card design: Product image on soft gradient bg → Name → Brand badge → Price → Quick Add to Cart button
- "Bestseller" / "New" badges where applicable

**Heritage Banner (Mid-page)**
- Split layout: Left = old-style illustration or textured pattern, Right = text
- "125 Years of Egyptian Quality" with a brief 2-line story
- "Read Our Story →" link
- Background: Subtle paper texture or warm linen pattern

**Where to Find Us**
- Logo ticker/carousel of the 14 retail partners
- Subtle, grayscale logos that colorize on hover
- Text: "أيضاً متوفر في" / "Also available at"

**Footer**
- 4 columns: Shop (categories), Company (About, Contact), Help (FAQ, Shipping, Returns), Connect (Social links, Newsletter)
- Bottom: Logo, "© 2025 El Bostany Co.", Payment method icons, language toggle

### 5.2 Product Listing Page (PLP)

**Layout**
- Left sidebar (desktop): Filters — Category, Brand, Size, Price Range
- Right: Product grid (3 columns desktop, 2 mobile)
- Top bar: Result count, Sort dropdown, Grid/List toggle
- Mobile: Sticky filter button → opens bottom sheet

**Product Card**
```
┌──────────────────────────┐
│  [Wishlist ♡]     [Badge]│
│                          │
│      🖼️ Product Image    │
│    (on soft gradient bg)  │
│                          │
├──────────────────────────┤
│ Brand Badge (e.g. King)  │
│ Product Name             │
│ Size: 1L                 │
│ EGP 125.00               │
│ [Add to Cart]            │
└──────────────────────────┘
```

### 5.3 Product Detail Page (PDP)

**Layout — Desktop**
```
┌─────────────────────┬──────────────────────────┐
│                     │ Brand: [Bostany badge]    │
│   Product Gallery   │ Product Name (H1)         │
│   (main + thumbs)   │ Size selector: 250ml 500ml│
│                     │ Price: EGP XX.XX          │
│                     │ Qty: [- 1 +]              │
│                     │ [Add to Cart — Red]       │
│                     │ [Add to Wishlist]         │
│                     │                          │
│                     │ ✓ Free delivery over 300  │
│                     │ ✓ Cash on delivery        │
│                     │ 🚚 Delivered in 2-4 days   │
├─────────────────────┴──────────────────────────┤
│ Tabs: Description | Nutritional Info | Reviews  │
├─────────────────────────────────────────────────┤
│ Related Products Carousel                       │
├─────────────────────────────────────────────────┤
│ "Also available at" — retail partner logos       │
└─────────────────────────────────────────────────┘
```

**Key details:**
- Image gallery with zoom-on-hover
- Variant selector styled as pill buttons (size options)
- Trust badges below CTA: Delivery info, payment options, return policy
- Sticky "Add to Cart" bar on mobile scroll

### 5.4 Shopping Cart

**Cart Design**
- Clean table layout: Product image + name + variant, Qty selector, Unit price, Line total, Remove
- Right sidebar (sticky): Order Summary — Subtotal, Shipping (calculated or "Free over EGP 300"), Promo Code input, Total
- CTA: "Proceed to Checkout" — large red button
- "Continue Shopping" link
- Empty cart state: Illustrated empty bag + "Your cart is empty" + Shop Now CTA

### 5.5 Checkout Flow

**Single-page checkout with 3 collapsible sections** (preferred for Egypt market — reduces abandonment):

**Section 1: Delivery Information**
- Guest checkout option (important for Egypt — many first-time online buyers)
- Phone number (primary — used for delivery coordination, Egypt standard)
- Full name
- Address: Governorate dropdown → City/Area → Street address → Building/Floor/Apt → Landmark (common in Egypt)
- Delivery notes field
- Option to save address (if logged in)

**Section 2: Payment Method**
```
┌─────────────────────────────────────────┐
│ How would you like to pay?              │
│                                         │
│ ○ Cash on Delivery (الدفع عند الاستلام)  │
│   Pay cash when your order arrives      │
│   ℹ️ COD fee: EGP 10                    │
│                                         │
│ ○ Card on Delivery (كارت عند الاستلام)   │
│   Pay by card when your order arrives   │
│   Visa / Mastercard accepted            │
│                                         │
│ ○ Pay Online (ادفع أونلاين)              │
│   Secure payment via credit/debit card  │
│   [Card Number] [Expiry] [CVV]          │
│   Powered by [Paymob / Fawry logo]     │
│                                         │
│ ○ Mobile Wallet (محفظة إلكترونية)        │
│   Vodafone Cash / Etisalat Cash / WE    │
│                                         │
└─────────────────────────────────────────┘
```

**Section 3: Review & Confirm**
- Order items summary (collapsible)
- Delivery address summary
- Payment method summary
- Estimated delivery date
- Terms & conditions checkbox
- "Place Order" CTA — large, red, with lock icon

**Post-Order: Success Page**
- Order number
- Estimated delivery
- Order summary
- "Track Your Order" link
- WhatsApp share button (very common in Egypt)
- "Continue Shopping" link

---

## 6. Checkout & Payment Integration Notes

### Payment Gateways for Egypt
| Method | Provider Options | Notes |
|--------|-----------------|-------|
| Online Card Payment | **Paymob**, Fawry, Accept | Paymob is most popular in Egypt. Supports Visa/MC/Meeza |
| Cash on Delivery | Internal logic | Add COD fee (EGP 10-15), set max order limit for COD |
| Card on Delivery | Shipping partner POS | Coordinate with shipping partner (Bosta, Aramex, etc.) |
| Mobile Wallet | Paymob, Fawry | Vodafone Cash, Orange Money, Etisalat Cash, WE Pay |
| Installments | valU, Sympl, Paymob | Optional — for large orders / bundles |

### Shipping Partners (Egypt)
| Partner | Strengths |
|---------|-----------|
| **Bosta** | #1 in Egypt for e-commerce, API-first, COD support, good tracking |
| Aramex | Established, nationwide coverage |
| Mylerz | Growing, good rates |
| R2S | Budget option, Cairo-focused |

### Recommended: **Bosta** for primary shipping
- Excellent API documentation
- Real-time tracking
- COD collection + settlement
- Card-on-delivery POS support
- Coverage: All 27 governorates
- Integration: REST API, webhook notifications

---

## 7. Key Features & Functionality

### Must-Have (MVP)
1. **Bilingual (AR/EN)** — RTL-first design, seamless toggle
2. **Product catalog** with categories, filtering, search
3. **Product detail pages** with variants (size selection)
4. **Shopping cart** with quantity management
5. **Guest checkout** (critical for Egypt market)
6. **3 payment methods**: COD, Card on Delivery, Online payment
7. **Order tracking** page
8. **User accounts** (optional registration)
9. **Mobile responsive** (60%+ traffic will be mobile in Egypt)
10. **WhatsApp integration** — floating button + order sharing
11. **SEO foundations** — meta tags, structured data, Arabic/English URLs

### Should-Have (Phase 2)
1. **Promo codes / discount system**
2. **Bundle deals** (e.g., "Breakfast Bundle" — fava beans + cheese + olive oil)
3. **Wishlist**
4. **Product reviews / ratings**
5. **Reorder functionality** (food is repurchased regularly)
6. **Push notifications** (web + mobile)
7. **Loyalty points program**
8. **Address book** (multiple saved addresses)

### Nice-to-Have (Phase 3)
1. **Subscription/auto-reorder** for regular items
2. **Recipe section** (featuring Bostany products)
3. **Bulk/wholesale ordering** portal
4. **Gift wrapping / Ramadan bundles**
5. **Referral program**
6. **Progressive Web App** (PWA) for mobile app feel

---

## 8. Mobile-First Considerations

Since the majority of Egyptian e-commerce traffic is mobile:

### Bottom Navigation Bar (Mobile)
```
[ 🏠 Home ] [ 🔍 Search ] [ 🛍️ Shop ] [ ❤️ Wishlist ] [ 👤 Account ]
```

### Mobile-Specific UX
- **Sticky Add to Cart** bar on PDP
- **Bottom sheet** for filters (not sidebar)
- **Swipeable product gallery** with pinch-to-zoom
- **Quick Add** from product cards (skip PDP for repeat buys)
- **Phone number login** (OTP via SMS — preferred in Egypt over email)
- **Tap-to-call** and tap-to-WhatsApp
- **Address autocomplete** using Google Maps API
- **Floating cart badge** with item count

---

## 9. SEO & Performance Strategy

### URL Structure
```
English:  /en/shop/olive-oil/extra-virgin-olive-oil-500ml
Arabic:   /ar/تسوق/زيت-زيتون/زيت-زيتون-بكر-ممتاز-500مل
```

### Key SEO Pages to Create
- "شراء تونة بستاني اونلاين" (Buy Bostany tuna online)
- "زيت زيتون مصري" (Egyptian olive oil)
- "فول مدمس بستاني" (Bostany medammes)
- "قهوة سريعة التحضير" (Instant coffee)
- Category landing pages with descriptive content

### Performance Targets
- **LCP**: < 2.5s (critical for Egyptian 4G connections)
- **Image optimization**: WebP format, lazy loading, CDN
- **Bundle size**: < 200KB initial JS
- **Caching**: Aggressive caching for product images and static assets

---

## 10. Design Mockup Prompts for v0/Stitch

Use these prompts to generate UI in v0 or Google Stitch:

### Prompt 1: Homepage Hero
```
Create a full-width hero section for an Egyptian food brand e-commerce site.
Brand: Bostany (بستاني), founded 1900 in Damietta, Egypt.
Background: warm cream (#F5F0EA) with subtle linen texture.
Left side: Large headline "From Our Family's Garden to Your Home"
with Arabic text "من بستان العيلة لبيتك" above it.
Gold circular badge showing "Est. 1900". Red CTA button "Shop Now".
Right side: Artful arrangement of product images (tuna can, olive oil
bottle, fava beans can). Typography: Playfair Display for headings.
Color palette: cream bg, red (#C41E24) CTA, gold (#C5993A) accents,
charcoal (#2D2D2D) text. Warm, premium, trustworthy feel.
```

### Prompt 2: Product Card Grid
```
Design a product card grid for an Egyptian food e-commerce site.
Show 4 products in a row. Each card: soft white background with
very subtle warm shadow, product image on a light gradient,
small brand badge (colored pill), product name in both Arabic
and English, size variant, price in EGP, and a red "Add to Cart"
button. Include a heart icon for wishlist. One card should show
a "Bestseller" badge in gold. Typography: clean sans-serif body,
serif product names. Color scheme: cream page bg, white cards,
red and gold accents.
```

### Prompt 3: Checkout Page
```
Design a single-page checkout for an Egyptian food delivery
e-commerce site. Three collapsible sections: 1) Delivery Info
(name, phone, governorate dropdown, address fields, landmark),
2) Payment Method (radio buttons for Cash on Delivery, Card on
Delivery, Pay Online with card form, Mobile Wallet),
3) Order Review. Right sidebar shows sticky order summary with
product thumbnails, subtotal, shipping, total. Large red
"Place Order" button. Arabic/English bilingual.
Warm cream background, clean modern design.
```

### Prompt 4: Mobile Product Detail
```
Design a mobile product detail page for Bostany Extra Virgin
Olive Oil 500ml. Full-width swipeable product gallery at top.
Below: Brand badge "Bostany", product name in Arabic and English,
size pills (250ml / 500ml selected), price EGP 185,
quantity selector, and full-width red "Add to Cart" button.
Trust badges row: free delivery icon, COD icon, return policy.
Collapsible sections for Description, Nutritional Info.
Related products horizontal scroll at bottom.
Sticky bottom bar with price + Add to Cart on scroll.
```

---

## 11. Data Model Overview

### Core Entities
```
Product {
  id, slug_en, slug_ar,
  name_en, name_ar,
  description_en, description_ar,
  brand_id (FK → Brand),
  category_id (FK → Category),
  images[],
  variants[]: { size, price, sku, stock, weight },
  nutritional_info,
  badges[]: "bestseller" | "new" | "sale",
  is_active,
  created_at, updated_at
}

Brand {
  id, name_en, name_ar, slug, logo_url, color_hex
}

Category {
  id, name_en, name_ar, slug_en, slug_ar,
  parent_id (for sub-categories),
  image_url, accent_color
}

Order {
  id, order_number,
  user_id (nullable for guest),
  guest_email, guest_phone,
  items[]: { product_id, variant_sku, qty, unit_price },
  shipping_address: { ... },
  payment_method: "cod" | "card_delivery" | "online" | "wallet",
  payment_status: "pending" | "paid" | "failed",
  order_status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled",
  shipping_tracking_id,
  subtotal, shipping_fee, discount, total,
  promo_code,
  notes,
  created_at
}

User {
  id, name, email, phone,
  addresses[],
  orders[],
  wishlist[],
  preferred_language: "ar" | "en"
}
```

---

## 12. Content Requirements

### Photography Needed
- [ ] Professional product shots on white/transparent background (all SKUs)
- [ ] Lifestyle shots: Egyptian breakfast table, kitchen scenes, family meals
- [ ] Heritage imagery: Damietta port, old family photos (if available)
- [ ] Category hero images (oils pouring, coffee being prepared, etc.)
- [ ] Team/warehouse/production facility photos (for About page)

### Copy Needed (Arabic + English)
- [ ] Homepage hero headlines (3-4 rotating)
- [ ] Category descriptions (8 categories)
- [ ] Product descriptions (all ~30 SKUs)
- [ ] About Us page (expanded from PDF)
- [ ] FAQ content (15-20 questions)
- [ ] Policy pages (shipping, returns, privacy, terms)
- [ ] SEO meta descriptions for all pages

---

## 13. Analytics & Tracking Setup

### Required Integrations
- Google Analytics 4 (GA4) with enhanced e-commerce
- Meta Pixel (Facebook/Instagram ads)
- TikTok Pixel (growing platform in Egypt)
- Google Tag Manager for event management
- Hotjar or Microsoft Clarity (heatmaps, session recordings)

### Key Events to Track
- `view_item`, `add_to_cart`, `begin_checkout`, `purchase`
- `select_payment_method` (critical to understand COD vs online ratio)
- Cart abandonment triggers
- Search queries (what are people looking for?)
- Category page engagement

---

## 14. Launch Checklist

### Pre-Launch
- [ ] All product data entered with images
- [ ] Payment gateway tested (all 4 methods)
- [ ] Shipping integration tested with Bosta
- [ ] Arabic/English content reviewed by native speakers
- [ ] Mobile testing on popular Egyptian devices (Samsung A-series, Xiaomi, iPhone)
- [ ] Page speed optimization (test on 4G throttled)
- [ ] SSL certificate installed
- [ ] Legal pages published
- [ ] Analytics & tracking verified
- [ ] Order notification emails/SMS configured
- [ ] WhatsApp Business integration tested

### Post-Launch (Week 1-2)
- [ ] Monitor order flow end-to-end
- [ ] Check COD settlement cycle with shipping partner
- [ ] Review analytics for UX issues
- [ ] Gather initial customer feedback
- [ ] Social media announcement campaign
- [ ] Instagram/Facebook shop integration

---

## 15. Recommended Tech Stack (Reference Only)

Since you're using v0/Stitch for design and Claude Code for development:

| Layer | Recommended |
|-------|------------|
| Frontend | Next.js 14+ (App Router) or Nuxt 3 (given your Vue expertise) |
| Styling | Tailwind CSS + shadcn/ui components |
| State | Pinia (Nuxt) or Zustand (Next) |
| CMS / Admin | Medusa.js (headless e-commerce) or Strapi + custom |
| Database | PostgreSQL (Supabase for speed) |
| Auth | Supabase Auth or NextAuth with phone OTP |
| Payments | Paymob SDK |
| Shipping | Bosta API |
| CDN/Images | Cloudflare R2 + Image Optimization |
| Hosting | Vercel (Next) or Netlify (Nuxt) |
| Analytics | GA4 + GTM |

---

*Document prepared for Vector9 — Bostany E-Commerce Project*
*Last updated: February 2026*
