# Bostany E-Commerce — Image Asset Map

## Where These Images Go

All images should be placed in `/public/images/` in the Next.js project.
Copy the entire folder structure below directly into `/public/images/`.

```
public/images/
├── logo/
│   ├── bostany-logo.jpeg      (35KB - with white bg, use for fallback)
│   └── bostany-logo.png       (123KB - transparent bg, USE THIS for header/footer)
│
├── products/
│   ├── tuna/
│   │   ├── tuna-chunks.jpeg           (51KB)  → Product: "Tuna Chunks"
│   │   ├── spicy-tuna-chunks.jpeg     (54KB)  → Product: "Spicy Tuna Chunks"
│   │   └── tuna-combo.jpeg            (23KB)  → Category hero / combo shot
│   │
│   ├── olive-oil/
│   │   ├── virgin-olive-oil-250ml.jpeg        (50KB)  → Variant: 250ml
│   │   ├── virgin-olive-oil-500ml.jpeg        (49KB)  → Variant: 500ml
│   │   ├── extra-virgin-olive-oil-250ml.jpeg  (51KB)  → Variant: 250ml
│   │   └── extra-virgin-olive-oil-500ml.jpeg  (49KB)  → Variant: 500ml
│   │
│   ├── rice-bran-oil/
│   │   ├── rice-bran-oil-1l.jpeg      (44KB)  → Variant: 1L
│   │   ├── rice-bran-oil-2l.jpeg      (86KB)  → Variant: 2L
│   │   └── rice-bran-oil-benefits.jpeg(64KB)  → Marketing/info graphic
│   │
│   ├── canned-goods/
│   │   ├── plain-fava-beans.jpeg      (36KB)  → Product: "Plain Fava Beans"
│   │   ├── sweet-corn.jpeg            (33KB)  → Product: "Sweet Corn"
│   │   └── sweet-corn-alt.jpeg        (36KB)  → Alternate angle
│   │
│   ├── coffee/
│   │   ├── instant-coffee-100g.jpeg       (33KB)  → Variant: 100g
│   │   ├── instant-coffee-200g.jpeg       (33KB)  → Variant: 200g
│   │   ├── gold-instant-coffee-100g.jpeg  (35KB)  → Variant: 100g
│   │   └── gold-instant-coffee-200g.jpeg  (34KB)  → Variant: 200g
│   │
│   ├── cheese-dairy/
│   │   ├── feta-white-cheese.jpeg     (30KB)  → Product: "Feta White Cheese" (Prego)
│   │   ├── cheese-paste.jpeg          (30KB)  → Product: "Cheese Paste" (Brigo)
│   │   ├── cream-spread.jpeg          (31KB)  → Product: "Cream Spread" (Delice)
│   │   └── white-cheese.jpeg          (23KB)  → Product: "White Cheese" (Delice)
│   │
│   ├── milk/
│   │   ├── milk-powder.jpeg           (31KB)  → Product: "Milk Powder" (Delice)
│   │   └── uht-milk.jpeg             (19KB)  → Product: "UHT Milk" (Brigo)
│   │
│   ├── juices/
│   │   ├── apple-juice.jpeg           (18KB)  → Product: "Apple Juice"
│   │   ├── orange-juice.jpeg          (18KB)  → Product: "Orange Juice"
│   │   ├── guava-juice.jpeg           (18KB)  → Product: "Guava Juice"
│   │   ├── mango-juice.jpeg           (20KB)  → Product: "Mango Juice"
│   │   └── cocktail-nectar.jpeg       (19KB)  → Product: "Cocktail Nectar"
│   │
│   └── syrups/
│       └── manutti-lineup.jpeg        (111KB) → All Manutti syrups (group shot)
│           NOTE: This is the ONLY syrup image — it shows all 8 bottles.
│           Use this same image for all individual syrup products.
│           Individual syrup bottle images are NOT available.
│
├── retail-partners/
│   ├── hyper1.jpeg          (8KB)
│   ├── mahmoud-elfar.jpeg   (5KB)
│   ├── spinneys.jpeg        (9KB)
│   ├── the-grocer.jpeg      (16KB)
│   ├── al-masrya.jpeg       (3KB)
│   ├── talabat.jpeg         (3KB)
│   ├── oscar.jpeg           (4KB)
│   ├── flamingo.jpeg        (6KB)
│   ├── carrefour.jpeg       (4KB)
│   ├── royal-house.jpeg     (6KB)
│   ├── metro.jpeg           (5KB)
│   ├── seoudi.jpeg          (3KB)
│   ├── gourmet.jpeg         (7KB)
│   └── breadfast.jpeg       (4KB)
│
├── pages/    (full PDF page renders — use for category heroes or reference)
│   ├── tuna-page.jpeg
│   ├── olive-oil-page.jpeg
│   ├── rice-bran-oil-page.jpeg
│   ├── fava-beans-page.jpeg
│   ├── sweet-corn-page.jpeg
│   ├── coffee-page.jpeg
│   ├── cheese-page.jpeg
│   ├── milk-page.jpeg
│   ├── juice-page.jpeg
│   ├── syrups-page.jpeg
│   └── retailers-page.jpeg
│
└── misc/
    └── instagram-qr.jpeg     (58KB)
```

## Product → Image Path Mapping (for mock data)

Use these exact paths in your product data:

```typescript
// In /lib/data/products.ts, use these image paths:

// TUNA
{ slug: "tuna-chunks",        images: ["/images/products/tuna/tuna-chunks.jpeg"] }
{ slug: "spicy-tuna-chunks",  images: ["/images/products/tuna/spicy-tuna-chunks.jpeg"] }

// OLIVE OIL (variant-specific images!)
{ slug: "virgin-olive-oil",   images: ["/images/products/olive-oil/virgin-olive-oil-500ml.jpeg", "/images/products/olive-oil/virgin-olive-oil-250ml.jpeg"] }
{ slug: "extra-virgin-olive-oil", images: ["/images/products/olive-oil/extra-virgin-olive-oil-500ml.jpeg", "/images/products/olive-oil/extra-virgin-olive-oil-250ml.jpeg"] }

// RICE BRAN OIL (variant-specific images!)
{ slug: "rice-bran-oil",      images: ["/images/products/rice-bran-oil/rice-bran-oil-1l.jpeg", "/images/products/rice-bran-oil/rice-bran-oil-2l.jpeg"] }

// CANNED GOODS
{ slug: "plain-fava-beans",   images: ["/images/products/canned-goods/plain-fava-beans.jpeg"] }
{ slug: "sweet-corn",         images: ["/images/products/canned-goods/sweet-corn.jpeg", "/images/products/canned-goods/sweet-corn-alt.jpeg"] }

// COFFEE (variant-specific images!)
{ slug: "instant-coffee",     images: ["/images/products/coffee/instant-coffee-100g.jpeg", "/images/products/coffee/instant-coffee-200g.jpeg"] }
{ slug: "gold-instant-coffee", images: ["/images/products/coffee/gold-instant-coffee-100g.jpeg", "/images/products/coffee/gold-instant-coffee-200g.jpeg"] }

// CHEESE & DAIRY
{ slug: "feta-white-cheese",  images: ["/images/products/cheese-dairy/feta-white-cheese.jpeg"] }
{ slug: "cheese-paste",       images: ["/images/products/cheese-dairy/cheese-paste.jpeg"] }
{ slug: "cream-spread",       images: ["/images/products/cheese-dairy/cream-spread.jpeg"] }
{ slug: "white-cheese",       images: ["/images/products/cheese-dairy/white-cheese.jpeg"] }
{ slug: "milk-powder",        images: ["/images/products/milk/milk-powder.jpeg"] }
{ slug: "uht-milk",           images: ["/images/products/milk/uht-milk.jpeg"] }

// JUICES
{ slug: "apple-juice",        images: ["/images/products/juices/apple-juice.jpeg"] }
{ slug: "orange-juice",       images: ["/images/products/juices/orange-juice.jpeg"] }
{ slug: "guava-juice",        images: ["/images/products/juices/guava-juice.jpeg"] }
{ slug: "mango-juice",        images: ["/images/products/juices/mango-juice.jpeg"] }
{ slug: "cocktail-nectar",    images: ["/images/products/juices/cocktail-nectar.jpeg"] }

// SYRUPS (all use same group image — individual bottles not available)
{ slug: "mint-syrup",         images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "hazelnut-syrup",     images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "peach-puree",        images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "pineapple-puree",    images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "blue-curacao-syrup", images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "blueberry-puree",    images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "raspberry-syrup",    images: ["/images/products/syrups/manutti-lineup.jpeg"] }
{ slug: "mixed-berries-puree",images: ["/images/products/syrups/manutti-lineup.jpeg"] }
```

## Image Quality Notes

- All product images extracted from company PDF brochure
- Images have light gray/white studio backgrounds (not transparent)
- Product images are good quality for a demo — clean studio shots
- Juice images are smaller (600x450 source) — adequate but not large
- Cheese/dairy images are smaller (600x450 source) — adequate for cards
- Coffee and olive oil images are high quality (960-1600px source)
- Logo PNG has basic white-removal transparency (edges may be rough at very large sizes — fine for header use)
- Syrups only have a group promotional shot — no individual bottle images
- Retail partner logos are small but usable for a logo bar

## What's Missing (For Phase 2 / Client Delivery)

- [ ] Individual Manutti syrup bottle photos (we only have the group promo image)
- [ ] Lifestyle / hero photography (kitchen scenes, breakfast table)
- [ ] Brand logos for King, TopValue, Brigo, Delice, Prego (only Bostany and Manutti logos available)
- [ ] Higher-res cheese/dairy and juice images
- [ ] Product photos from multiple angles
- [ ] Transparent background product shots (current have gray/white studio bg)
