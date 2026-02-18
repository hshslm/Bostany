import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Tajawal } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CartProvider } from "@/lib/context/CartContext";
import { WishlistProvider } from "@/lib/context/WishlistContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bostany.co"),
  title: {
    default: "Bostany | بستاني — Quality Since 1900",
    template: "%s | Bostany",
  },
  description:
    "Egypt's trusted food brand since 1900. Shop tuna, olive oil, fava beans, coffee, cheese, juices, syrups and more from El Bostany Co.",
  keywords: [
    "Bostany",
    "بستاني",
    "Egyptian food",
    "tuna",
    "olive oil",
    "fava beans",
  ],
  openGraph: {
    type: "website",
    siteName: "Bostany",
    locale: "en_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${tajawal.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CartProvider>
            <WishlistProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <Toaster />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
