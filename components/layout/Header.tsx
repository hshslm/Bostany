"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, Heart, ShoppingBag, ChevronDown, Globe } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { useWishlist } from "@/lib/context/WishlistContext";
import { categories } from "@/lib/data/categories";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { SearchOverlay } from "@/components/layout/SearchOverlay";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/about" },
] as const;

export function Header(): React.ReactElement {
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [catOpen, setCatOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback((): void => setSearchOpen(true), []);
  const closeSearch = useCallback((): void => setSearchOpen(false), []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-charcoal text-center text-xs text-warm-white/90 py-2 px-4">
        <span className="font-medium">Free delivery on orders over EGP 300</span>
        <span className="mx-2 text-heritage-gold">|</span>
        <span className="font-arabic" dir="rtl">توصيل مجاني للطلبات فوق ٣٠٠ جنيه</span>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 border-b border-light-border bg-warm-white/95 backdrop-blur supports-[backdrop-filter]:bg-warm-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Left: Hamburger (mobile) + Nav (desktop) */}
          <div className="flex items-center gap-6">
            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="flex h-11 w-11 items-center justify-center md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6 text-charcoal" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <Image
                    src="/images/logo/bostany-logo.png"
                    alt="Bostany"
                    width={100}
                    height={40}
                    className="mb-2"
                  />
                </SheetHeader>
                <Separator className="my-4" />
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/shop"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-btn px-3 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-cream"
                  >
                    Shop All
                  </Link>
                  <div className="px-3 pt-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate">
                    Categories
                  </div>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop?category=${cat.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-btn px-3 py-2 text-sm text-charcoal transition-colors hover:bg-cream"
                    >
                      <span>{cat.name}</span>
                      <span className="font-arabic text-xs text-slate" dir="rtl">{cat.nameAr}</span>
                    </Link>
                  ))}
                  <Separator className="my-3" />
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-btn px-3 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-cream"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/wishlist"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-btn px-3 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-cream"
                  >
                    Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              <Link
                href="/shop"
                className="rounded-btn px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-bostany-red"
              >
                Shop
              </Link>

              {/* Categories dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-btn px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-bostany-red"
                  aria-expanded={catOpen}
                >
                  Categories
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${catOpen ? "rotate-180" : ""}`} />
                </button>
                {catOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="w-56 rounded-card border border-light-border bg-warm-white p-2 shadow-lg">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/shop?category=${cat.slug}`}
                          className="flex items-center justify-between rounded-btn px-3 py-2 text-sm text-charcoal transition-colors hover:bg-cream hover:text-bostany-red"
                          onClick={() => setCatOpen(false)}
                        >
                          <span>{cat.name}</span>
                          <span className="font-arabic text-xs text-slate" dir="rtl">{cat.nameAr}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks
                .filter((l) => l.label !== "Shop")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-btn px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-bostany-red"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/logo/bostany-logo.png"
              alt="Bostany"
              width={120}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Right: Icons */}
          <div className="flex items-center gap-1">
            {/* Search (desktop) */}
            <button
              onClick={openSearch}
              className="hidden h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream hover:text-bostany-red md:flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Wishlist (desktop) */}
            <Link
              href="/wishlist"
              className="relative hidden h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream hover:text-bostany-red md:flex"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bostany-red text-[9px] font-bold text-white">
                  {wishlistCount > 9 ? "9+" : wishlistCount}
                </span>
              )}
            </Link>

            {/* EN/AR toggle (desktop) */}
            <button
              className="hidden items-center gap-1 rounded-btn px-2 py-1.5 text-xs font-medium text-charcoal transition-colors hover:bg-cream hover:text-bostany-red md:flex"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              EN
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream hover:text-bostany-red"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-bostany-red text-[10px] font-bold text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile search */}
            <button
              onClick={openSearch}
              className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream md:hidden"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  );
}
