import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/lib/data/brands";
import { retailPartners } from "@/lib/data/retail-partners";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { RetailPartners } from "@/components/home/RetailPartners";

export const metadata: Metadata = {
  title: "Our Story — Since 1900",
  description:
    "Discover the story of Bostany — four generations of Egyptian food excellence since 1900. From Damietta to dinner tables across Egypt.",
};

// ─── Timeline data ──────────────────────────────────────────────

const milestones = [
  {
    year: "1900",
    title: "Founded in Damietta",
    description:
      "Abbas El Bostany establishes a small trading house in Damietta, beginning with white cheese, Romy cheese, rice, and beans sourced from the fertile Nile Delta.",
  },
  {
    year: "1950s",
    title: "Expanded Across the Delta",
    description:
      "The second generation grows the dairy and grain business, establishing distribution networks across Dakahlia, Gharbia, and neighbouring governorates.",
  },
  {
    year: "1980s",
    title: "Entered National Markets",
    description:
      "Bostany products reach Cairo and Alexandria, with expanded cereal and grain trading operations serving major Egyptian cities.",
  },
  {
    year: "2000s",
    title: "International Partnerships",
    description:
      "Strategic alliances with Thai producers bring premium tuna and rice bran oil into the Bostany portfolio, launching the King brand for cooking oils.",
  },
  {
    year: "2010s",
    title: "Multi-Brand Strategy",
    description:
      "Launch of TopValue instant coffee, Manutti gourmet syrups, and partnerships with Prego, Brigo, and Delice — expanding from 1 brand to 7.",
  },
  {
    year: "2020s",
    title: "National Retail Presence",
    description:
      "Bostany products are stocked in 14+ major retailers including Spinneys, Carrefour, Metro, and Seoudi, plus digital platforms like Talabat and Breadfast.",
  },
  {
    year: "2025",
    title: "Direct to Consumer",
    description:
      "Launching our online store — bringing 125 years of quality directly to your doorstep for the first time.",
  },
];

// ─── Values data ────────────────────────────────────────────────

const values = [
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3C10 3 5 10 5 18c0 4 2.5 7 5.5 8.5.5.3 1 .5 1.5.5h8c.5 0 1-.2 1.5-.5C24.5 25 27 22 27 18c0-8-5-15-11-15z" />
        <path d="M12 28v1a3 3 0 006 0v-1" />
        <path d="M16 3V1" />
        <path d="M10 12c-1 1-2 3-2 5" />
      </svg>
    ),
    title: "Quality",
    titleAr: "جودة",
    description:
      "Every product carries the reputation of four generations. We never compromise — whether it's cold-pressed olive oil or GMO-free tuna.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16c0-3 2-6 5-7.5M26 16c0-3-2-6-5-7.5" />
        <circle cx="16" cy="6" r="3" />
        <circle cx="8" cy="22" r="3" />
        <circle cx="24" cy="22" r="3" />
        <path d="M16 9v4l-6 6M16 13l6 6" />
      </svg>
    ),
    title: "Trust",
    titleAr: "ثقة",
    description:
      "Available in Egypt's most respected retailers — from Spinneys and Gourmet to Carrefour and Metro. Trusted by millions of Egyptian families.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="13" />
        <path d="M2 16h28" />
        <ellipse cx="16" cy="16" rx="6" ry="13" />
        <path d="M5.5 8h21M5.5 24h21" />
      </svg>
    ),
    title: "Partnership",
    titleAr: "شراكة",
    description:
      "Working with local artisans and international producers to bring the best of both worlds. From Damietta's dairy farms to Thailand's finest tuna.",
  },
];

// ─── Page Component ─────────────────────────────────────────────

export default function AboutPage(): React.ReactElement {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal">
        {/* Decorative texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(197,153,58,1) 30px, rgba(197,153,58,1) 31px)",
            }}
          />
        </div>

        <div className="container relative mx-auto flex flex-col items-center px-4 py-20 text-center md:py-28">
          {/* Heritage badge */}
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-heritage-gold/40">
            <span className="text-[8px] font-semibold uppercase tracking-[2px] text-heritage-gold/60">
              Est.
            </span>
            <span className="font-display text-2xl font-bold leading-none text-heritage-gold">
              1900
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            A Family Legacy
            <br />
            Since 1900
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-heritage-gold md:text-xl">
            From Damietta to Egypt&apos;s dinner tables — four generations of quality
          </p>

          {/* Arabic */}
          <p
            className="mt-3 font-arabic text-base text-white/40"
            dir="rtl"
          >
            من دمياط إلى كل بيت مصري — أربعة أجيال من الجودة
          </p>

          {/* Decorative line */}
          <div className="mt-10 h-px w-16 bg-heritage-gold/40" />
        </div>
      </section>

      {/* ── 2. Story Blocks ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* Block 1: Our Beginnings */}
          <AnimateOnScroll>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[3px] text-heritage-gold">
                  Chapter One
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-4xl">
                  Our Beginnings
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
                  <p>
                    In 1900, Abbas El Bostany opened a modest trading house in the coastal city of Damietta — a region renowned for its rich dairy traditions and fertile agricultural land along the Nile Delta.
                  </p>
                  <p>
                    Starting with white cheese, Romy cheese, premium rice, and locally sourced beans, Abbas built a reputation for uncompromising quality. His simple principle: never sell a product you wouldn&apos;t serve your own family.
                  </p>
                  <p>
                    That principle still guides every decision we make today.
                  </p>
                </div>
                <p
                  className="mt-4 font-arabic text-sm text-slate/50"
                  dir="rtl"
                >
                  &quot;لا تبيع شيئاً لا تقدمه لعائلتك&quot; — عباس البستاني
                </p>
              </div>

              {/* Decorative visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative h-80 w-full overflow-hidden rounded-card md:h-96">
                  {/* Warm textured background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f5efe6] to-[#ece5d9]" />
                  {/* Diagonal linen pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(197,153,58,0.08) 20px, rgba(197,153,58,0.08) 40px)",
                    }}
                  />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-heritage-gold/30 bg-white/60">
                      <span className="text-[7px] font-semibold uppercase tracking-[2px] text-heritage-gold/60">
                        Damietta
                      </span>
                      <span className="font-display text-3xl font-bold leading-none text-heritage-gold">
                        1900
                      </span>
                    </div>
                    <p className="mt-6 text-center font-display text-lg font-semibold text-charcoal/60">
                      Where quality began
                    </p>
                    <p
                      className="mt-1 font-arabic text-sm text-charcoal/40"
                      dir="rtl"
                    >
                      حيث بدأت الجودة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Block 2: Growing With Egypt */}
          <AnimateOnScroll>
            <div className="mt-24 grid items-center gap-12 md:mt-32 md:grid-cols-2 md:gap-16">
              {/* Visual on the left for this block */}
              <div className="relative flex items-center justify-center md:order-1 lg:order-none">
                <div className="relative h-80 w-full overflow-hidden rounded-card md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/90" />
                  {/* Gold grid overlay */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(197,153,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,153,58,1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Decade markers */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
                    {["1900s", "1950s", "1980s", "2000s", "2010s", "2020s"].map(
                      (decade, i) => (
                        <div
                          key={decade}
                          className="flex items-center gap-3"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-heritage-gold" />
                          <span
                            className="font-display text-lg font-semibold text-white/80"
                            style={{ opacity: 0.4 + i * 0.12 }}
                          >
                            {decade}
                          </span>
                          <div
                            className="h-px bg-heritage-gold/30"
                            style={{ width: `${40 + i * 20}px` }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="md:order-2 lg:order-none">
                <span className="text-xs font-semibold uppercase tracking-[3px] text-heritage-gold">
                  Chapter Two
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-4xl">
                  Growing With Egypt
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
                  <p>
                    What began as a Damietta trading house grew with each generation. By the 1950s, the second generation had expanded dairy and grain distribution across the entire Nile Delta region.
                  </p>
                  <p>
                    The 2000s brought a pivotal turn — strategic partnerships with Thai producers introduced world-class tuna and rice bran oil, while the launch of Manutti brought gourmet syrups to Egypt&apos;s growing cafe culture.
                  </p>
                  <p>
                    TopValue instant coffee, Brigo juices, Prego cheeses, Delice dairy — each brand was carefully chosen to serve a specific need in the Egyptian kitchen.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Block 3: Today & Tomorrow */}
          <AnimateOnScroll>
            <div className="mt-24 grid items-center gap-12 md:mt-32 md:grid-cols-2 md:gap-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[3px] text-heritage-gold">
                  Chapter Three
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-4xl">
                  Today &amp; Tomorrow
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
                  <p>
                    Today, El Bostany Co. operates 7 brands across 8 product categories, with 30+ products reaching millions of Egyptian families through 14 major retail partners.
                  </p>
                  <p>
                    From Spinneys and Gourmet to Carrefour and Metro — and now digitally through Talabat and Breadfast — Bostany products are never far from reach.
                  </p>
                  <p>
                    Now, for the first time in 125 years, we&apos;re bringing our full range directly to you. No middlemen, no markups — just four generations of quality, delivered to your door.
                  </p>
                </div>
              </div>

              {/* Brand family visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative h-80 w-full overflow-hidden rounded-card md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-cream to-[#ece5d9]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-slate/50">
                      Our Brand Family
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      {brands.map((brand) => (
                        <span
                          key={brand.id}
                          className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                          style={{ backgroundColor: brand.color }}
                        >
                          {brand.name}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-center text-sm text-slate/60">
                      7 brands. 8 categories. 30+ products.
                    </p>
                    <p
                      className="mt-1 font-arabic text-xs text-slate/40"
                      dir="rtl"
                    >
                      ٧ علامات تجارية. ٨ فئات. +٣٠ منتج.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 3. Timeline ─────────────────────────────────── */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-heritage-gold">
                125 Years of Excellence
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                Our Journey
              </h2>
              <p
                className="mt-2 font-arabic text-base text-white/40"
                dir="rtl"
              >
                رحلتنا عبر الزمن
              </p>
            </div>
          </AnimateOnScroll>

          {/* Timeline */}
          <div className="relative mx-auto mt-16 max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-heritage-gold/20 md:left-1/2 md:-translate-x-px" />

            {milestones.map((milestone, i) => (
              <AnimateOnScroll key={milestone.year} delay={i * 100}>
                <div
                  className={`relative mb-12 last:mb-0 pl-16 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-[calc(50%+2rem)] md:text-right"
                      : "md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 top-1 h-5 w-5 rounded-full border-2 border-heritage-gold bg-charcoal md:left-1/2 md:-translate-x-1/2 ${
                      i === milestones.length - 1
                        ? "border-bostany-red bg-bostany-red"
                        : ""
                    }`}
                  >
                    {i === milestones.length - 1 && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-bostany-red/40" />
                    )}
                  </div>

                  {/* Content */}
                  <span className="font-display text-2xl font-bold text-heritage-gold">
                    {milestone.year}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {milestone.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Values ───────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-heritage-gold">
                What We Stand For
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-4xl">
                Our Values
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 120}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-heritage-gold/10 text-heritage-gold">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-charcoal">
                    {value.title}
                  </h3>
                  <p
                    className="mt-1 font-arabic text-sm text-heritage-gold"
                    dir="rtl"
                  >
                    {value.titleAr}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Retail Partners ──────────────────────────── */}
      <AnimateOnScroll>
        <RetailPartners partners={retailPartners} />
      </AnimateOnScroll>

      {/* ── 6. CTA Section ──────────────────────────────── */}
      <section className="border-t border-light-border bg-gradient-to-b from-cream to-[#ede4d6] py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <div className="flex h-16 w-16 mx-auto flex-col items-center justify-center rounded-full border border-heritage-gold/30">
              <span className="text-[6px] font-semibold uppercase tracking-[1px] text-heritage-gold/50">
                Est.
              </span>
              <span className="font-display text-lg font-bold leading-none text-heritage-gold">
                1900
              </span>
            </div>

            <h2 className="mt-8 font-display text-3xl font-bold text-charcoal md:text-4xl">
              Ready to Taste the Difference?
            </h2>
            <p className="mt-3 text-lg text-slate">
              125 years of quality, now delivered directly to your door.
            </p>
            <p
              className="mt-2 font-arabic text-base text-slate/60"
              dir="rtl"
            >
              جاهز تجرب الفرق؟ ١٢٥ سنة من الجودة توصلك لحد باب بيتك.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/shop">
                  <span className="flex items-center gap-2">
                    Shop Now
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>

            {/* Contact */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
              <a
                href="mailto:bostany.co@gmail.com"
                className="text-sm text-heritage-gold hover:underline"
              >
                bostany.co@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/bostany.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-light-border text-slate transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-light-border text-slate transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-light-border text-slate transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                  aria-label="TikTok"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
