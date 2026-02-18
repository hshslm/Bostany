"use client";

import { useMemo, useState, useCallback, useTransition } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, ChevronRight, X, Search } from "lucide-react";
import type { Product, Category, Brand } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// ─── Types ───────────────────────────────────────────────────────

type SortOption = "popular" | "price-asc" | "price-desc" | "newest";
interface ShopPageClientProps {
  allProducts: Product[];
  categories: Category[];
  brands: Brand[];
}

// ─── Helpers ─────────────────────────────────────────────────────

function getLowestPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sorted = [...products];
  switch (sortBy) {
    case "popular":
      sorted.sort((a, b) => {
        const badgeDiff = b.badges.length - a.badges.length;
        if (badgeDiff !== 0) return badgeDiff;
        return a.name.localeCompare(b.name);
      });
      break;
    case "price-asc":
      sorted.sort((a, b) => getLowestPrice(a) - getLowestPrice(b));
      break;
    case "price-desc":
      sorted.sort((a, b) => getLowestPrice(b) - getLowestPrice(a));
      break;
    case "newest":
      sorted.reverse();
      break;
  }
  return sorted;
}

// ─── Filter Sidebar Content ──────────────────────────────────────

interface FilterContentProps {
  categories: Category[];
  brands: Brand[];
  selectedCategories: Set<string>;
  selectedBrands: Set<string>;
  priceMin: string;
  priceMax: string;
  productCountByCategory: Record<string, number>;
  productCountByBrand: Record<string, number>;
  onToggleCategory: (slug: string) => void;
  onToggleBrand: (slug: string) => void;
  onPriceMinChange: (val: string) => void;
  onPriceMaxChange: (val: string) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

function FilterContent({
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  priceMin,
  priceMax,
  productCountByCategory,
  productCountByBrand,
  onToggleCategory,
  onToggleBrand,
  onPriceMinChange,
  onPriceMaxChange,
  onClearAll,
  hasActiveFilters,
}: FilterContentProps): React.ReactElement {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate">Categories</h3>
        <div className="mt-3 space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-2.5 rounded-btn px-2 py-1.5 transition-colors hover:bg-cream"
            >
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={selectedCategories.has(cat.slug)}
                onChange={() => onToggleCategory(cat.slug)}
              />
              <span className="flex-1 text-sm text-charcoal">{cat.name}</span>
              <span className="text-xs text-slate">
                {productCountByCategory[cat.slug] ?? 0}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate">Brands</h3>
        <div className="mt-3 space-y-2">
          {brands.map((brand) => (
            <label
              key={brand.id}
              className="flex cursor-pointer items-center gap-2.5 rounded-btn px-2 py-1.5 transition-colors hover:bg-cream"
            >
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={selectedBrands.has(brand.slug)}
                onChange={() => onToggleBrand(brand.slug)}
              />
              <span className="flex-1 text-sm text-charcoal">{brand.name}</span>
              <span className="text-xs text-slate">
                {productCountByBrand[brand.slug] ?? 0}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate">
          Price Range (EGP)
        </h3>
        <div className="mt-3 flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => onPriceMinChange(e.target.value)}
            className="h-9 text-sm"
          />
          <span className="text-slate">—</span>
          <Input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => onPriceMaxChange(e.target.value)}
            className="h-9 text-sm"
          />
        </div>
      </div>

      {/* Clear All */}
      {hasActiveFilters && (
        <>
          <Separator />
          <Button variant="ghost" className="w-full" onClick={onClearAll}>
            <X className="mr-2 h-4 w-4" />
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  );
}

// ─── Empty State ─────────────────────────────────────────────────

function EmptyState({ onClear }: { onClear: () => void }): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl">🔍</span>
      <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">
        No products found
      </h3>
      <p className="mt-2 max-w-sm text-sm text-slate">
        We couldn&apos;t find any products matching your filters. Try adjusting
        your search or clearing filters.
      </p>
      <Button variant="outline" className="mt-6" onClick={onClear}>
        Clear All Filters
      </Button>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────

export function ShopPageClient({
  allProducts,
  categories,
  brands,
}: ShopPageClientProps): React.ReactElement {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // ─── Read state from URL ────────────────────────────────────

  const selectedCategories = useMemo(() => {
    const param = searchParams.get("category");
    return new Set(param ? param.split(",").filter(Boolean) : []);
  }, [searchParams]);

  const selectedBrands = useMemo(() => {
    const param = searchParams.get("brand");
    return new Set(param ? param.split(",").filter(Boolean) : []);
  }, [searchParams]);

  const searchQuery = searchParams.get("q") ?? "";
  const sortBy = (searchParams.get("sort") as SortOption) || "popular";
  const priceMin = searchParams.get("min") ?? "";
  const priceMax = searchParams.get("max") ?? "";

  const hasActiveFilters =
    selectedCategories.size > 0 ||
    selectedBrands.size > 0 ||
    searchQuery !== "" ||
    priceMin !== "" ||
    priceMax !== "";

  // ─── URL updater ────────────────────────────────────────────

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }
      const qs = params.toString();
      startTransition(() => {
        router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
      });
    },
    [searchParams, router, pathname, startTransition]
  );

  // ─── Filter handlers ───────────────────────────────────────

  const toggleCategory = useCallback(
    (slug: string) => {
      const next = new Set(selectedCategories);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      updateParams({
        category: next.size > 0 ? Array.from(next).join(",") : null,
      });
    },
    [selectedCategories, updateParams]
  );

  const toggleBrand = useCallback(
    (slug: string) => {
      const next = new Set(selectedBrands);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      updateParams({
        brand: next.size > 0 ? Array.from(next).join(",") : null,
      });
    },
    [selectedBrands, updateParams]
  );

  const setPriceMin = useCallback(
    (val: string) => updateParams({ min: val || null }),
    [updateParams]
  );

  const setPriceMax = useCallback(
    (val: string) => updateParams({ max: val || null }),
    [updateParams]
  );

  const setSearch = useCallback(
    (val: string) => updateParams({ q: val || null }),
    [updateParams]
  );

  const setSort = useCallback(
    (val: string) => updateParams({ sort: val === "popular" ? null : val }),
    [updateParams]
  );

  const clearAll = useCallback(() => {
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  }, [router, pathname, startTransition]);

  // ─── Filter + sort products ─────────────────────────────────

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    if (selectedCategories.size > 0) {
      result = result.filter((p) => selectedCategories.has(p.category.slug));
    }

    if (selectedBrands.size > 0) {
      result = result.filter((p) => selectedBrands.has(p.brand.slug));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.nameAr.includes(searchQuery) ||
          p.description.toLowerCase().includes(q) ||
          p.brand.name.toLowerCase().includes(q) ||
          p.category.name.toLowerCase().includes(q)
      );
    }

    if (priceMin) {
      const min = Number(priceMin);
      if (!isNaN(min)) {
        result = result.filter((p) => getLowestPrice(p) >= min);
      }
    }

    if (priceMax) {
      const max = Number(priceMax);
      if (!isNaN(max)) {
        result = result.filter((p) => getLowestPrice(p) <= max);
      }
    }

    return sortProducts(result, sortBy);
  }, [
    allProducts,
    selectedCategories,
    selectedBrands,
    searchQuery,
    priceMin,
    priceMax,
    sortBy,
  ]);

  // ─── Product counts for filter badges ───────────────────────

  const productCountByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of allProducts) {
      counts[p.category.slug] = (counts[p.category.slug] ?? 0) + 1;
    }
    return counts;
  }, [allProducts]);

  const productCountByBrand = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of allProducts) {
      counts[p.brand.slug] = (counts[p.brand.slug] ?? 0) + 1;
    }
    return counts;
  }, [allProducts]);

  // ─── Breadcrumb ─────────────────────────────────────────────

  const activeCategoryName =
    selectedCategories.size === 1
      ? categories.find((c) => selectedCategories.has(c.slug))?.name
      : null;

  const activeBrandName =
    selectedBrands.size === 1
      ? brands.find((b) => selectedBrands.has(b.slug))?.name
      : null;

  // ─── Shared filter props ────────────────────────────────────

  const filterProps: FilterContentProps = {
    categories,
    brands,
    selectedCategories,
    selectedBrands,
    priceMin,
    priceMax,
    productCountByCategory,
    productCountByBrand,
    onToggleCategory: toggleCategory,
    onToggleBrand: toggleBrand,
    onPriceMinChange: setPriceMin,
    onPriceMaxChange: setPriceMax,
    onClearAll: clearAll,
    hasActiveFilters,
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-slate">
        <Link href="/" className="transition-colors hover:text-charcoal">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href="/shop"
          className={
            activeCategoryName || activeBrandName || searchQuery
              ? "transition-colors hover:text-charcoal"
              : "font-medium text-charcoal"
          }
        >
          Shop
        </Link>
        {activeCategoryName && (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-charcoal">{activeCategoryName}</span>
          </>
        )}
        {activeBrandName && !activeCategoryName && (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-charcoal">{activeBrandName}</span>
          </>
        )}
        {searchQuery && (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-charcoal">
              &ldquo;{searchQuery}&rdquo;
            </span>
          </>
        )}
      </nav>

      {/* Page heading */}
      <div className="mt-4">
        <h1 className="font-display text-3xl font-bold text-charcoal">
          {activeCategoryName
            ? activeCategoryName
            : activeBrandName
              ? activeBrandName
              : searchQuery
                ? `Results for "${searchQuery}"`
                : "Shop All Products"}
        </h1>
      </div>

      {/* Search bar */}
      <div className="relative mt-4 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
        <Input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Main layout */}
      <div className="mt-6 flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-[260px] shrink-0 md:block">
          <div className="scrollbar-on-hover sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain pr-2">
            <h2 className="font-display text-lg font-semibold">Filters</h2>
            <div className="mt-4 pb-4">
              <FilterContent {...filterProps} />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-slate">
              Showing{" "}
              <span className="font-semibold text-charcoal">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>

            <div className="flex items-center gap-2">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSort}>
                <SelectTrigger className="h-9 w-[180px] text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

            </div>
          </div>

          {/* Active filter tags */}
          {hasActiveFilters && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {Array.from(selectedCategories).map((slug) => {
                const cat = categories.find((c) => c.slug === slug);
                return (
                  <button
                    key={`cat-${slug}`}
                    onClick={() => toggleCategory(slug)}
                    className="inline-flex items-center gap-1 rounded-full bg-bostany-red/10 px-3 py-1 text-xs font-medium text-bostany-red transition-colors hover:bg-bostany-red/20"
                  >
                    {cat?.name ?? slug}
                    <X className="h-3 w-3" />
                  </button>
                );
              })}
              {Array.from(selectedBrands).map((slug) => {
                const brand = brands.find((b) => b.slug === slug);
                return (
                  <button
                    key={`brand-${slug}`}
                    onClick={() => toggleBrand(slug)}
                    className="inline-flex items-center gap-1 rounded-full bg-heritage-gold/10 px-3 py-1 text-xs font-medium text-heritage-gold transition-colors hover:bg-heritage-gold/20"
                  >
                    {brand?.name ?? slug}
                    <X className="h-3 w-3" />
                  </button>
                );
              })}
              {searchQuery && (
                <button
                  onClick={() => setSearch("")}
                  className="inline-flex items-center gap-1 rounded-full bg-charcoal/10 px-3 py-1 text-xs font-medium text-charcoal transition-colors hover:bg-charcoal/20"
                >
                  &ldquo;{searchQuery}&rdquo;
                  <X className="h-3 w-3" />
                </button>
              )}
              {(priceMin || priceMax) && (
                <button
                  onClick={() => {
                    setPriceMin("");
                    setPriceMax("");
                  }}
                  className="inline-flex items-center gap-1 rounded-full bg-charcoal/10 px-3 py-1 text-xs font-medium text-charcoal transition-colors hover:bg-charcoal/20"
                >
                  EGP {priceMin || "0"} — {priceMax || "∞"}
                  <X className="h-3 w-3" />
                </button>
              )}
              <button
                onClick={clearAll}
                className="text-xs font-medium text-slate underline transition-colors hover:text-charcoal"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Product grid / empty state */}
          {filteredProducts.length === 0 ? (
            <EmptyState onClear={clearAll} />
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
              {filteredProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="product-grid-item"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Sticky filter/sort bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex items-center gap-2 border-t border-light-border bg-warm-white/95 px-4 py-3 backdrop-blur md:hidden">
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex-1 gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bostany-red text-[10px] font-bold text-white">
                  {selectedCategories.size + selectedBrands.size + (priceMin || priceMax ? 1 : 0)}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto rounded-t-2xl">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <FilterContent {...filterProps} />
            </div>
            <div className="mt-6">
              <Button
                className="w-full"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Show {filteredProducts.length} results
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <Select value={sortBy} onValueChange={setSort}>
          <SelectTrigger className="h-10 flex-1 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="price-asc">Price: Low → High</SelectItem>
            <SelectItem value="price-desc">Price: High → Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
