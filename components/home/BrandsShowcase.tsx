import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/types";

interface BrandsShowcaseProps {
  brands: Brand[];
  productCountByBrand: Record<string, number>;
}

const brandHeroImages: Record<string, string> = {
  bostany: "/images/products/olive-oil/extra-virgin-olive-oil-500ml.jpeg",
  king: "/images/products/rice-bran-oil/rice-bran-oil-1l.jpeg",
  topvalue: "/images/products/coffee/gold-instant-coffee-100g.jpeg",
  manutti: "/images/products/syrups/manutti-lineup.jpeg",
  prego: "/images/products/cheese-dairy/feta-white-cheese.jpeg",
  brigo: "/images/products/juices/mango-juice.jpeg",
  delice: "/images/products/cheese-dairy/cream-spread.jpeg",
};

const brandDescriptions: Record<string, string> = {
  bostany: "Tuna, Olive Oil & Pantry Essentials",
  king: "Premium Rice Bran Oil",
  topvalue: "Instant Coffee",
  manutti: "Gourmet Flavored Syrups",
  prego: "Feta Cheese & Dairy",
  brigo: "Juices & Cheese",
  delice: "Cream Spread & Dairy",
};

function BrandCard({
  brand,
  count,
  featured,
}: {
  brand: Brand;
  count: number;
  featured?: boolean;
}): React.ReactElement {
  return (
    <Link href={`/shop?brand=${brand.slug}`} className={featured ? "col-span-2" : ""}>
      <div
        className="group relative flex h-full min-h-[200px] overflow-hidden rounded-card md:min-h-[220px]"
        style={{ backgroundColor: brand.color }}
      >
        {/* Diagonal texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.03) 20px,
              rgba(255,255,255,0.03) 40px
            )`,
          }}
        />

        {/* Product image — ghosted on right */}
        <div className="absolute bottom-0 right-0 top-0 flex w-1/2 items-center justify-center opacity-[0.15] transition-opacity duration-500 group-hover:opacity-25">
          <Image
            src={brandHeroImages[brand.slug]!}
            alt=""
            width={featured ? 200 : 140}
            height={featured ? 200 : 140}
            className="h-full w-auto scale-110 object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Text content */}
        <div className="relative flex flex-col justify-end p-5 md:p-6">
          <p
            className={`font-display font-bold leading-tight text-white ${
              featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {brand.name}
          </p>
          <p className="mt-0.5 font-arabic text-sm text-white/60" dir="rtl">
            {brand.nameAr}
          </p>
          <div className="mt-3 h-px w-8 bg-white/30" />
          <p className="mt-2 text-xs text-white/50">
            {brandDescriptions[brand.slug]}
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/40">
            {count} {count === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Hover arrow */}
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 text-white/0 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/60">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function BrandsShowcase({ brands, productCountByBrand }: BrandsShowcaseProps): React.ReactElement {
  const bostany = brands.find((b) => b.slug === "bostany");
  const subBrands = brands.filter((b) => b.slug !== "bostany");

  // Split into two rows: [bostany(2col) + first2] and [last4]
  const topRow = subBrands.slice(0, 2);
  const bottomRow = subBrands.slice(2);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold">Our Brands</h2>
          <p className="mt-1 text-sm text-slate">
            Seven trusted names, one family legacy
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {/* Row 1: Bostany (2 cols) + 2 sub-brands */}
          {bostany && (
            <BrandCard
              brand={bostany}
              count={productCountByBrand[bostany.slug] ?? 0}
              featured
            />
          )}
          {topRow.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              count={productCountByBrand[brand.slug] ?? 0}
            />
          ))}

          {/* Row 2: 4 sub-brands */}
          {bottomRow.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              count={productCountByBrand[brand.slug] ?? 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
