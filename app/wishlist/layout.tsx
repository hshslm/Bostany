import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist | Bostany",
  description: "Your saved products — add them to cart when ready.",
};

export default function WishlistLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return <>{children}</>;
}
