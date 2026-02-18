import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";

interface CategoryGridProps {
  categories: Category[];
}

function CategoryCard({
  cat,
  featured,
}: {
  cat: Category;
  featured?: boolean;
}): React.ReactElement {
  return (
    <Link
      href={`/shop?category=${cat.slug}`}
      className={featured ? "col-span-2" : ""}
    >
      <div
        className={`group relative overflow-hidden rounded-card ${
          featured ? "h-56 md:h-72" : "h-48 md:h-56"
        }`}
      >
        {/* Category image */}
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-colors duration-500 group-hover:from-black/70 group-hover:via-black/20" />

        {/* Accent glow at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-1 opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{
            backgroundColor: cat.accentColor,
            boxShadow: `0 0 20px ${cat.accentColor}80, 0 0 40px ${cat.accentColor}40`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
          {/* Accent dot + count */}
          <div className="flex items-center gap-2">
            <span
              className="block h-2 w-2 rounded-full"
              style={{ backgroundColor: cat.accentColor }}
            />
            <span className="text-[11px] font-medium uppercase tracking-wider text-white/50">
              {cat.productCount} {cat.productCount === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Names */}
          <p
            className={`mt-2 font-display font-bold leading-tight text-white ${
              featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
          >
            {cat.name}
          </p>
          <p className="mt-0.5 font-arabic text-sm text-white/60" dir="rtl">
            {cat.nameAr}
          </p>
        </div>

        {/* Hover arrow */}
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 text-white/0 transition-all duration-300 group-hover:bg-white/15 group-hover:text-white/80">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function CategoryGrid({ categories }: CategoryGridProps): React.ReactElement {
  // First 2 get hero treatment, rest fill the grid below
  const featured = categories.slice(0, 2);
  const rest = categories.slice(2);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold">Shop by Category</h2>
          <p className="mt-1 font-arabic text-base text-slate" dir="rtl">
            تسوق حسب الفئة
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {/* Featured row: 2 large cards (each span 2 cols) */}
          {featured.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} featured />
          ))}

          {/* Remaining 6 categories */}
          {rest.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
