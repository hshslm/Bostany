"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/context/CartContext";

const tabs = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/shop" },
  { icon: ShoppingBag, label: "Shop", href: "/shop" },
  { icon: Heart, label: "Wishlist", href: "#" },
  { icon: User, label: "Account", href: "#" },
] as const;

export function MobileNav(): React.ReactElement {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-light-border bg-warm-white/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={cn(
                "relative flex flex-col items-center gap-1 px-3 py-1 transition-colors",
                isActive ? "text-bostany-red" : "text-slate"
              )}
            >
              <Icon className="h-5 w-5" />
              {tab.label === "Shop" && totalItems > 0 && (
                <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-bostany-red text-[8px] font-bold text-white">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
              <span className="text-[10px]">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
