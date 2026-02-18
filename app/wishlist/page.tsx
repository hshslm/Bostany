"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlist } from "@/lib/context/WishlistContext";
import { useCart } from "@/lib/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WishlistPage(): React.ReactElement {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="font-display text-3xl font-bold text-charcoal">Wishlist</h1>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream">
            <Heart className="h-10 w-10 text-slate/40" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-charcoal">
            Your wishlist is empty
          </h2>
          <p className="mt-2 max-w-sm text-sm text-slate">
            Save products you love by tapping the heart icon. They&apos;ll appear here for easy access.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center gap-3">
        <h1 className="font-display text-3xl font-bold text-charcoal">Wishlist</h1>
        <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-slate">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => {
          const firstVariant = product.variants[0];
          return (
            <div
              key={product.id}
              className="group overflow-hidden rounded-card bg-warm-white shadow-sm"
            >
              {/* Horizontal on mobile, vertical on sm+ */}
              <div className="flex sm:block">
                {/* Image */}
                <Link href={`/product/${product.slug}`} className="flex-shrink-0">
                  <div className="relative flex h-32 w-28 items-center justify-center bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3] p-3 sm:h-52 sm:w-full sm:p-4">
                    {product.images[0] && (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={180}
                        height={180}
                        className="h-24 w-auto object-contain mix-blend-multiply sm:h-40"
                      />
                    )}
                  </div>
                </Link>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <Badge variant="brand">{product.brand.name}</Badge>
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="mt-2 text-sm font-semibold text-charcoal transition-colors hover:text-bostany-red">
                        {product.name}
                      </h3>
                    </Link>
                    {firstVariant && (
                      <p className="mt-1 text-sm font-bold text-charcoal">
                        <span className="text-xs font-normal text-slate">EGP</span>{" "}
                        {firstVariant.price}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 gap-1.5 text-xs"
                      onClick={() => {
                        if (firstVariant) {
                          addItem(product, firstVariant, 1);
                          removeItem(product.id);
                          toast({
                            title: "Moved to cart",
                            description: `${product.name} (${firstVariant.size})`,
                          });
                        }
                      }}
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Move to Cart
                    </Button>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-btn border border-light-border text-slate transition-colors hover:border-bostany-red hover:text-bostany-red"
                      aria-label={`Remove ${product.name}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
