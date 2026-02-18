"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { useWishlist } from "@/lib/context/WishlistContext";
import { useCart } from "@/lib/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): React.ReactElement {
  const firstVariant = product.variants[0];
  const { toggleItem, isWishlisted } = useWishlist();
  const { addItem } = useCart();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative overflow-hidden rounded-card bg-warm-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3] p-5">
          {product.badges.includes("bestseller") && (
            <Badge variant="gold" className="absolute left-3 top-3 z-10">Bestseller</Badge>
          )}
          {product.badges.includes("new") && (
            <Badge className="absolute left-3 top-3 z-10 bg-corn-green">New</Badge>
          )}
          {product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={200}
              height={200}
              className="h-44 w-auto object-contain drop-shadow-md mix-blend-multiply"
            />
          )}
        </div>
      </Link>

      {/* Wishlist heart */}
      <button
        onClick={(e) => { e.preventDefault(); toggleItem(product); }}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:scale-110"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            wishlisted ? "fill-bostany-red text-bostany-red" : "text-slate/50"
          }`}
        />
      </button>

      {/* Info */}
      <div className="p-4">
        <Badge variant="brand">{product.brand.name}</Badge>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-2 font-display text-base font-semibold text-charcoal transition-colors group-hover:text-bostany-red">{product.name}</h3>
        </Link>
        <p className="font-arabic text-sm text-slate" dir="rtl">{product.nameAr}</p>
        {firstVariant && (
          <>
            <p className="mt-1 text-xs text-slate">{firstVariant.size}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xl font-bold">
                <span className="text-xs font-normal text-slate">EGP</span>{" "}
                {firstVariant.price}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product, firstVariant, 1);
                  toast({ title: "Added to cart", description: `${product.name} (${firstVariant.size})` });
                }}
                className="flex h-9 w-9 items-center justify-center rounded-btn bg-bostany-red text-lg text-white transition-all hover:scale-105 hover:bg-bostany-red-hover"
                aria-label="Add to cart"
              >
                +
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
