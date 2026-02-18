import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Bostany",
  description: "Complete your order with secure checkout.",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return <>{children}</>;
}
