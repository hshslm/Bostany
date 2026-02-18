"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/lib/data";
import type { Product } from "@/lib/types";

const POPULAR_SEARCHES = ["Olive Oil", "Tuna", "Coffee", "Fava Beans"];
const MAX_RESULTS = 6;

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps): React.ReactElement | null {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Debounced search
  const handleChange = useCallback((value: string): void => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (value.trim().length > 0) {
        setResults(searchProducts(value).slice(0, MAX_RESULTS));
      } else {
        setResults([]);
      }
    }, 300);
  }, []);

  const handlePopularClick = useCallback((term: string): void => {
    setQuery(term);
    setResults(searchProducts(term).slice(0, MAX_RESULTS));
    inputRef.current?.focus();
  }, []);

  const totalResults = query.trim() ? searchProducts(query).length : 0;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative mx-auto w-full max-w-2xl pt-20 px-4 md:pt-28">
        <div className="overflow-hidden rounded-card bg-warm-white shadow-lg">
          {/* Input */}
          <div className="flex items-center gap-3 border-b border-light-border px-5 py-4">
            <Search className="h-5 w-5 flex-shrink-0 text-slate" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-base text-charcoal outline-none placeholder:text-slate/50"
            />
            {query && (
              <button
                onClick={() => { setQuery(""); setResults([]); inputRef.current?.focus(); }}
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate hover:bg-cream"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="flex h-8 items-center rounded-btn bg-cream px-3 text-xs font-medium text-slate"
            >
              ESC
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[60vh] overflow-y-auto p-5">
            {/* Empty state: popular searches */}
            {!query.trim() && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate">
                  Popular Searches
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => handlePopularClick(term)}
                      className="rounded-full border border-light-border bg-cream px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {query.trim() && results.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate">
                  {totalResults} {totalResults === 1 ? "Result" : "Results"}
                </p>
                <div className="mt-3 space-y-1">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-btn p-3 transition-colors hover:bg-cream"
                    >
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-btn bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3]">
                        {product.images[0] && (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="h-11 w-auto object-contain mix-blend-multiply"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-semibold text-charcoal">
                          {product.name}
                        </p>
                        <p className="text-xs text-slate">
                          <span
                            className="font-semibold"
                            style={{ color: product.brand.color }}
                          >
                            {product.brand.name}
                          </span>
                          {product.variants[0] && (
                            <span className="ml-2">
                              {product.variants[0].size}
                            </span>
                          )}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-charcoal">
                        EGP {product.variants[0]?.price}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* View all link */}
                {totalResults > MAX_RESULTS && (
                  <Link
                    href={`/shop?q=${encodeURIComponent(query)}`}
                    onClick={onClose}
                    className="mt-4 flex items-center justify-center gap-1 rounded-btn bg-cream py-3 text-sm font-medium text-bostany-red transition-colors hover:bg-bostany-red/5"
                  >
                    View all {totalResults} results
                    <span className="text-xs">&rarr;</span>
                  </Link>
                )}
              </div>
            )}

            {/* No results */}
            {query.trim() && results.length === 0 && (
              <div className="py-8 text-center">
                <p className="text-sm font-medium text-charcoal">
                  No products found for &quot;{query}&quot;
                </p>
                <p className="mt-1 text-xs text-slate">
                  Try a different search term
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
