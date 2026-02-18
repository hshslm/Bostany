import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getProductsByCategory } from "@/lib/data";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";

// ─── Static params for all active products ──────────────────────

export function generateStaticParams(): { slug: string }[] {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

// ─── Dynamic metadata ───────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | Bostany" };
  }

  const variant = product.variants[0];
  const price = variant ? `EGP ${variant.price}` : "";

  return {
    title: `${product.name} | Bostany`,
    description: `${product.description} ${price} — Shop ${product.brand.name} at Bostany.`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

// ─── Page component ─────────────────────────────────────────────

export default async function ProductPage({
  params,
}: PageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from same category, excluding current product
  const relatedProducts = getProductsByCategory(product.category.slug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
