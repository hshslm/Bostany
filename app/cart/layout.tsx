import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Bostany",
  description: "Review your cart and proceed to checkout.",
};

export default function CartLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return <>{children}</>;
}
