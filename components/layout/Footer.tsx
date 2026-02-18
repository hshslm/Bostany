import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data/categories";

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Heritage Since 1900", href: "/about" },
  { label: "Where to Buy", href: "/about#retail-partners" },
  { label: "Careers", href: "#" },
] as const;

const helpLinks = [
  { label: "Contact Us", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "Returns & Refunds", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export function Footer(): React.ReactElement {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Image
              src="/images/logo/bostany-logo.png"
              alt="Bostany"
              width={130}
              height={52}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-warm-white/60">
              Egypt&apos;s trusted food brand since 1900. Quality products your
              family can count on — generation after generation.
            </p>
            <p className="mt-2 font-arabic text-sm text-warm-white/50" dir="rtl">
              بستاني — جودة من ١٩٠٠
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/20 text-warm-white/60 transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/20 text-warm-white/60 transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/20 text-warm-white/60 transition-colors hover:border-heritage-gold hover:text-heritage-gold"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            </div>
          </div>

          {/* Shop categories column */}
          <div>
            <h3 className="font-display text-base font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-warm-white/60 transition-colors hover:text-heritage-gold"
                >
                  All Products
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${cat.slug}`}
                    className="text-sm text-warm-white/60 transition-colors hover:text-heritage-gold"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-display text-base font-semibold">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/60 transition-colors hover:text-heritage-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="font-display text-base font-semibold">Help</h3>
            <ul className="mt-4 space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/60 transition-colors hover:text-heritage-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-warm-white/40">Customer Service</p>
              <a
                href="mailto:bostany.co@gmail.com"
                className="mt-1 text-sm text-heritage-gold hover:underline"
              >
                bostany.co@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Gold separator */}
        <div className="my-10 h-px bg-heritage-gold/30" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-warm-white/40">
            &copy; {new Date().getFullYear()} El Bostany Co. for Investment and Trade
            Development. All rights reserved.
          </p>
          {/* Payment badges */}
          <div className="flex items-center gap-3">
            <span className="rounded border border-warm-white/20 px-2 py-1 text-[10px] font-medium text-warm-white/50">
              VISA
            </span>
            <span className="rounded border border-warm-white/20 px-2 py-1 text-[10px] font-medium text-warm-white/50">
              MASTERCARD
            </span>
            <span className="rounded border border-warm-white/20 px-2 py-1 text-[10px] font-medium text-warm-white/50">
              COD
            </span>
            <span className="rounded border border-warm-white/20 px-2 py-1 text-[10px] font-medium text-warm-white/50">
              VODAFONE CASH
            </span>
          </div>
        </div>

        {/* Built by Vector9 */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          <span className="text-[11px] text-warm-white/30">Built by</span>
          <a
            href="https://vector9.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group/v9 ml-1 inline-flex items-center gap-1 transition-opacity hover:opacity-100"
          >
            {/* Vector9 logo mark — circle with lightning bolt cutout */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 32 32"
              className="opacity-40 transition-opacity group-hover/v9:opacity-70"
            >
              <circle cx="16" cy="16" r="16" fill="#F0F0F3" />
              <path
                d="M17.5 7L11 17h4.5L14.5 25L21 15h-4.5L17.5 7z"
                fill="#0A0B0F"
                stroke="#0A0B0F"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[11px] font-medium text-warm-white/40 transition-colors group-hover/v9:text-warm-white/70">
              Vector9
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
