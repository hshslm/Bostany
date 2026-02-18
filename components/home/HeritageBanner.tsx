import Link from "next/link";

export function HeritageBanner(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 md:py-20">
      {/* Subtle gold diagonal pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(197,153,58,0.04) 30px,
            rgba(197,153,58,0.04) 60px
          )`,
        }}
      />

      {/* Thin gold lines at top and bottom */}
      <div className="absolute inset-x-0 top-0 h-px bg-heritage-gold/20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-heritage-gold/20" />

      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:gap-16">
        {/* Left: Heritage badge */}
        <div className="flex shrink-0 flex-col items-center">
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-heritage-gold md:h-36 md:w-36">
            <span className="text-[9px] uppercase tracking-[2px] text-heritage-gold/70">
              Est.
            </span>
            <span className="font-display text-4xl font-bold text-heritage-gold md:text-5xl">
              1900
            </span>
            <span className="text-[8px] uppercase tracking-[1.5px] text-heritage-gold/60">
              Damietta
            </span>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl font-bold text-warm-white md:text-3xl">
            A Legacy of Quality Since 1900
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-warm-white/60">
            Founded by Abbas El Bostany in the coastal city of Damietta, our family has
            spent over a century perfecting the art of quality food. What began as a small
            trading company is now one of Egypt&apos;s most trusted food brands.
          </p>
          <p className="mt-2 max-w-lg font-arabic text-sm text-warm-white/40" dir="rtl">
            أسسها عباس البستاني في مدينة دمياط الساحلية — أكثر من قرن من التميز في صناعة الغذاء
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex text-sm font-semibold text-heritage-gold transition-colors hover:text-heritage-gold/80"
          >
            Read Our Story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
