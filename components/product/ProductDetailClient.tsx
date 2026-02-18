"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Minus, Plus, Check, Star, Truck, Banknote, RotateCcw } from "lucide-react";
import type { Product, ProductVariant } from "@/lib/types";
import { useCart } from "@/lib/context/CartContext";
import { useWishlist } from "@/lib/context/WishlistContext";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product/ProductCard";

// ─── Types ───────────────────────────────────────────────────────

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

// ─── Mock reviews ────────────────────────────────────────────────

const mockReviews = [
  { name: "Ahmed M.", rating: 5, date: "2 weeks ago", comment: "Excellent quality, exactly what I expected from Bostany. Will order again." },
  { name: "Sara K.", rating: 4, date: "1 month ago", comment: "Great product and fast delivery. Packaging was very secure." },
  { name: "Mohamed R.", rating: 5, date: "2 months ago", comment: "Been buying Bostany products for years. Consistent quality every time." },
];

// ─── Star Rating ─────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }): React.ReactElement {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= Math.floor(rating)
              ? "fill-heritage-gold text-heritage-gold"
              : i - 0.5 <= rating
                ? "fill-heritage-gold/50 text-heritage-gold"
                : "fill-light-border text-light-border"
          }`}
        />
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps): React.ReactElement {
  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Sticky bar on mobile — show when CTA scrolls out of view
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = useCallback((): void => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedVariant.size}) x${quantity}`,
    });
    setTimeout(() => setAdded(false), 2000);
  }, [addItem, product, selectedVariant, quantity]);

  const hasMultipleImages = product.images.length > 1;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-slate">
        <Link href="/" className="transition-colors hover:text-charcoal">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/shop?category=${product.category.slug}`} className="transition-colors hover:text-charcoal">
          {product.category.name}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-charcoal">{product.name}</span>
      </nav>

      {/* ─── Two-column layout ─────────────────────────────────── */}
      <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* LEFT: Image gallery */}
        <div className="lg:w-[55%]">
          {/* Main image */}
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-card bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3]">
            {product.images[activeImage] && (
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                width={500}
                height={500}
                className="h-[80%] w-auto object-contain drop-shadow-md mix-blend-multiply"
                priority
              />
            )}
            {/* Mobile swipe dots */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 lg:hidden">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeImage ? "w-6 bg-bostany-red" : "w-2 bg-charcoal/20"
                    }`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnails (desktop, multiple images only) */}
          {hasMultipleImages && (
            <div className="mt-3 hidden gap-3 lg:flex">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-btn bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3] transition-all ${
                    i === activeImage
                      ? "ring-2 ring-heritage-gold ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} view ${i + 1}`}
                    width={72}
                    height={72}
                    className="h-16 w-auto object-contain mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product info */}
        <div className="lg:w-[45%]">
          {/* Brand badge */}
          <Link href={`/shop?brand=${product.brand.slug}`}>
            <Badge
              className="cursor-pointer text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: product.brand.color }}
            >
              {product.brand.name}
            </Badge>
          </Link>

          {/* Name */}
          <h1 className="mt-3 font-display text-[28px] font-bold leading-tight text-charcoal lg:text-[32px]">
            {product.name}
          </h1>
          <p className="mt-1 font-arabic text-lg text-slate" dir="rtl">
            {product.nameAr}
          </p>

          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="mt-3 flex items-center gap-2">
              {product.badges.includes("bestseller") && (
                <Badge variant="gold">Bestseller</Badge>
              )}
              {product.badges.includes("new") && (
                <Badge className="bg-corn-green text-white">New</Badge>
              )}
              {product.badges.includes("sale") && (
                <Badge className="bg-bostany-red text-white">Sale</Badge>
              )}
            </div>
          )}

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <StarRating rating={4.5} />
            <span className="text-sm text-slate">(24 reviews)</span>
          </div>

          <Separator className="my-5" />

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => { setSelectedVariant(v); setQuantity(1); }}
                    className={`rounded-btn px-4 py-2 text-sm font-medium transition-all ${
                      v.id === selectedVariant.id
                        ? "bg-bostany-red text-white shadow-sm"
                        : "bg-warm-white text-charcoal ring-1 ring-light-border hover:ring-charcoal"
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-[28px] font-bold text-charcoal">
              <span className="text-sm font-normal text-slate">EGP</span>{" "}
              {selectedVariant.price}
            </span>
            {selectedVariant.compareAtPrice && (
              <span className="text-lg text-slate line-through">
                EGP {selectedVariant.compareAtPrice}
              </span>
            )}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-5 flex items-center gap-3">
            {/* Quantity stepper */}
            <div className="flex items-center rounded-btn ring-1 ring-light-border">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-11 w-11 items-center justify-center text-charcoal transition-colors hover:bg-cream"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex h-11 w-10 items-center justify-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-11 w-11 items-center justify-center text-charcoal transition-colors hover:bg-cream"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Add to Cart */}
            <Button
              ref={ctaRef}
              size="lg"
              className="flex-1 gap-2 text-base"
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" />
                  Added
                </>
              ) : (
                "Add to Cart"
              )}
            </Button>
          </div>

          {/* Wishlist */}
          <button
            onClick={() => toggleItem(product)}
            className={`mt-3 inline-flex items-center gap-1.5 text-sm transition-colors ${
              wishlisted ? "text-bostany-red" : "text-slate hover:text-bostany-red"
            }`}
          >
            <Heart className={`h-4 w-4 ${wishlisted ? "fill-bostany-red" : ""}`} />
            {wishlisted ? "Wishlisted" : "Add to Wishlist"}
          </button>

          <Separator className="my-5" />

          {/* Trust badges */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-slate">
              <Truck className="h-4 w-4 text-heritage-gold" />
              Free delivery over EGP 300
            </div>
            <div className="flex items-center gap-2 text-sm text-slate">
              <Banknote className="h-4 w-4 text-heritage-gold" />
              Cash on delivery
            </div>
            <div className="flex items-center gap-2 text-sm text-slate">
              <RotateCcw className="h-4 w-4 text-heritage-gold" />
              Easy returns
            </div>
          </div>
        </div>
      </div>

      {/* ─── Tabs: Description / Nutrition / Reviews ───────────── */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start gap-1 bg-transparent p-0">
            <TabsTrigger value="description" className="data-[state=active]:bg-cream">
              Description
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-cream">
              Nutritional Info
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-cream">
              Reviews (3)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="max-w-2xl">
              <p className="leading-relaxed text-charcoal">{product.description}</p>
              {product.features.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-heritage-gold/10 px-3 py-1 text-xs font-medium text-heritage-gold"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            {product.nutritionalInfo ? (
              <div className="max-w-sm overflow-hidden rounded-card border border-light-border">
                <div className="bg-charcoal px-4 py-2.5">
                  <p className="text-sm font-semibold text-white">Nutrition Facts</p>
                  <p className="text-xs text-white/60">
                    Serving size: {product.nutritionalInfo.servingSize}
                  </p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Calories", `${product.nutritionalInfo.calories} kcal`],
                      ["Protein", product.nutritionalInfo.protein],
                      ["Total Fat", product.nutritionalInfo.fat],
                      ["Carbohydrates", product.nutritionalInfo.carbs],
                      ["Sodium", product.nutritionalInfo.sodium],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        className={i % 2 === 0 ? "bg-warm-white" : "bg-cream/50"}
                      >
                        <td className="px-4 py-2.5 font-medium text-charcoal">{label}</td>
                        <td className="px-4 py-2.5 text-right text-slate">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-slate">
                Nutritional information coming soon.
              </p>
            )}
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="max-w-2xl space-y-6">
              {mockReviews.map((review, i) => (
                <div key={i} className="rounded-card bg-warm-white p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-heritage-gold/10 text-sm font-bold text-heritage-gold">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">{review.name}</p>
                        <p className="text-xs text-slate">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{review.comment}</p>
                </div>
              ))}
              <Button variant="outline">Write a Review</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* ─── Related Products ──────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold">You May Also Like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* ─── Also Available At ─────────────────────────────────── */}
      <div className="mt-16 mb-8">
        <h2 className="font-display text-xl font-bold">Also Available At</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Spinneys", "Gourmet", "Carrefour", "Hyper1", "Metro", "Seoudi", "Talabat", "Breadfast"].map((name) => (
            <span
              key={name}
              className="rounded-full border border-light-border bg-warm-white px-3 py-1.5 text-xs font-medium text-slate"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Mobile sticky bar ─────────────────────────────────── */}
      {showStickyBar && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t border-light-border bg-warm-white/95 px-4 py-3 backdrop-blur lg:hidden">
          <div>
            <p className="text-xs text-slate">{selectedVariant.size}</p>
            <p className="text-lg font-bold text-charcoal">
              <span className="text-xs font-normal text-slate">EGP</span> {selectedVariant.price}
            </p>
          </div>
          <Button className="flex-1" onClick={handleAddToCart} disabled={added}>
            {added ? "Added" : "Add to Cart"}
          </Button>
        </div>
      )}
    </div>
  );
}
