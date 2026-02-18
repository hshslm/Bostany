"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps): React.ReactElement {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">Popular Products</h2>
            <p className="mt-1 text-sm text-slate">Handpicked favorites from our collection</p>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-semibold text-bostany-red transition-colors hover:text-bostany-red-hover md:inline-flex"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="mt-8 hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile: Horizontal carousel */}
        <div className="mt-8 md:hidden">
          <Carousel opts={{ align: "start", loop: false }}>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="basis-[70%]">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mobile: View All link */}
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/shop"
            className="text-sm font-semibold text-bostany-red transition-colors hover:text-bostany-red-hover"
          >
            View All Products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
