import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllProducts, getAllCategories, getAllBrands } from "@/lib/data";
import { ShopPageClient } from "@/components/shop/ShopPageClient";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Shop All Products | Bostany",
  description:
    "Browse Bostany's complete collection of premium Egyptian food products — tuna, olive oil, coffee, cheese, juices, syrups and more.",
};

function ShopSkeleton(): React.ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-8 w-48" />
      <div className="mt-6 flex gap-8">
        {/* Sidebar skeleton */}
        <div className="hidden w-[260px] flex-shrink-0 space-y-4 lg:block">
          <Skeleton className="h-5 w-20" />
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
          <Skeleton className="mt-6 h-5 w-16" />
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={`b-${i}`} className="h-8 w-full" />
          ))}
        </div>
        {/* Grid skeleton */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-card bg-warm-white">
                <Skeleton className="h-56 w-full" />
                <div className="space-y-2 p-4">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="mt-2 h-6 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopPageContent(): React.ReactElement {
  const allProducts = getAllProducts();
  const categories = getAllCategories();
  const brands = getAllBrands();

  return (
    <ShopPageClient
      allProducts={allProducts}
      categories={categories}
      brands={brands}
    />
  );
}

export default function ShopPage(): React.ReactElement {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <ShopPageContent />
    </Suspense>
  );
}
