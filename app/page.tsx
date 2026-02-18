import { getFeaturedProducts, getAllCategories, getAllBrands, getAllProducts } from "@/lib/data";
import { retailPartners } from "@/lib/data/retail-partners";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementTicker } from "@/components/home/AnnouncementTicker";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeritageBanner } from "@/components/home/HeritageBanner";
import { BrandsShowcase } from "@/components/home/BrandsShowcase";
import { RetailPartners } from "@/components/home/RetailPartners";
import { Newsletter } from "@/components/home/Newsletter";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";

export default function HomePage(): React.ReactElement {
  const categories = getAllCategories();
  const featured = getFeaturedProducts().slice(0, 8);
  const brands = getAllBrands();
  const allProducts = getAllProducts();

  // Count products per brand for the showcase
  const productCountByBrand: Record<string, number> = {};
  for (const product of allProducts) {
    const slug = product.brand.slug;
    productCountByBrand[slug] = (productCountByBrand[slug] ?? 0) + 1;
  }

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Announcement ticker */}
      <AnnouncementTicker />

      {/* 3. Shop by Category */}
      <AnimateOnScroll>
        <CategoryGrid categories={categories} />
      </AnimateOnScroll>

      {/* 4. Featured Products */}
      <AnimateOnScroll delay={100}>
        <FeaturedProducts products={featured} />
      </AnimateOnScroll>

      {/* 5. Heritage Story Banner */}
      <HeritageBanner />

      {/* 6. Brands Showcase */}
      <AnimateOnScroll>
        <BrandsShowcase brands={brands} productCountByBrand={productCountByBrand} />
      </AnimateOnScroll>

      {/* 7. Where to Find Us */}
      <AnimateOnScroll delay={100}>
        <RetailPartners partners={retailPartners} />
      </AnimateOnScroll>

      {/* 8. Newsletter */}
      <AnimateOnScroll>
        <Newsletter />
      </AnimateOnScroll>
    </>
  );
}
