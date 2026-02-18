"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection(): React.ReactElement {
  return (
    <section className="relative min-h-[400px] overflow-hidden bg-gradient-to-br from-cream via-cream to-[#ece5d9] md:min-h-[520px]">
      {/* Linen texture overlay */}
      <div className="hero-texture absolute inset-0" />

      <div className="container relative mx-auto flex flex-col items-center gap-10 px-4 py-14 md:flex-row md:gap-0 md:py-16">
        {/* ─── Left content (text) ─────────────────────────────── */}
        <div className="z-10 flex flex-1 flex-col items-center text-center md:items-start md:text-left" style={{ flex: "0 0 55%" }}>
          {/* Gold badge */}
          <span className="inline-flex items-center rounded-full border border-heritage-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-heritage-gold">
            Trusted Since 1900
          </span>

          {/* Headline */}
          <h1 className="mt-6 font-display text-[32px] font-bold leading-[1.15] text-charcoal md:text-[48px]">
            Quality Your{" "}
            <span className="text-bostany-red">Family Trusts</span>,{" "}
            Since 1900
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate md:text-lg">
            Over a century of Egyptian food excellence — premium products for every home
          </p>

          {/* Arabic subtitle */}
          <p className="mt-2 font-arabic text-sm text-slate/70" dir="rtl">
            جودة تثق فيها عيلتك من أكتر من ١٠٠ سنة
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>

        {/* ─── Right: Editorial product showcase (desktop) ───── */}
        <div className="relative hidden h-[420px] md:flex md:items-center md:justify-center" style={{ flex: "0 0 45%" }}>
          {/* Background: warm gradient arch */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer soft glow */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-b from-heritage-gold/[0.06] to-heritage-gold/[0.02]" />
            {/* Gold ring */}
            <div className="animate-ring-pulse absolute h-[340px] w-[340px] rounded-full border border-heritage-gold/20" />
            {/* Inner warm fill */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[#f5efe6] to-[#ede4d6]" />
          </div>

          {/* Product composition — structured pyramid */}
          <div className="relative h-[380px] w-[360px]">
            {/* Hero product — Olive Oil (center, dominant) */}
            <div className="animate-hero-enter animate-hero-levitate absolute left-1/2 top-2 z-20 -translate-x-1/2">
              <Image
                src="/images/products/olive-oil/extra-virgin-olive-oil-500ml.jpeg"
                alt="Extra Virgin Olive Oil"
                width={200}
                height={240}
                className="h-52 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                priority
              />
            </div>

            {/* Supporting product — Spicy Tuna (left, lower) */}
            <div className="animate-hero-enter-delay-1 animate-hero-levitate-slow absolute bottom-10 left-0 z-10">
              <Image
                src="/images/products/tuna/spicy-tuna-chunks.jpeg"
                alt="Spicy Tuna Chunks"
                width={140}
                height={140}
                className="h-32 w-auto object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.1)]"
              />
            </div>

            {/* Supporting product — Gold Coffee (right, lower) */}
            <div className="animate-hero-enter-delay-2 animate-hero-levitate-slow absolute bottom-10 right-0 z-10">
              <Image
                src="/images/products/coffee/gold-instant-coffee-100g.jpeg"
                alt="Gold Instant Coffee"
                width={140}
                height={140}
                className="h-32 w-auto object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.1)]"
              />
            </div>

            {/* Heritage badge — bottom center, tying composition together */}
            <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border border-heritage-gold/40 bg-cream shadow-sm">
                <span className="text-[7px] font-semibold uppercase tracking-[1px] text-heritage-gold/70">Est.</span>
                <span className="font-display text-lg font-bold leading-none text-heritage-gold">1900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
