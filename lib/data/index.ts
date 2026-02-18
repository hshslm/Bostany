import type { Brand, Category, Product } from "@/lib/types";
import { brands } from "./brands";
import { categories } from "./categories";
import { products } from "./products";

// Re-export raw data
export { brands } from "./brands";
export { categories } from "./categories";
export { products } from "./products";
export { retailPartners } from "./retail-partners";

// ─── Products ───────────────────────────────────────────────────

export function getAllProducts(): Product[] {
  return products.filter((p) => p.isActive);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.isActive);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(
    (p) => p.category.slug === categorySlug && p.isActive
  );
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand.slug === brandSlug && p.isActive);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badges.length > 0 && p.isActive);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return products.filter((p) => {
    if (!p.isActive) return false;
    return (
      p.name.toLowerCase().includes(q) ||
      p.nameAr.includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.name.toLowerCase().includes(q) ||
      p.category.name.toLowerCase().includes(q) ||
      p.features.some((f) => f.toLowerCase().includes(q))
    );
  });
}

// ─── Categories ─────────────────────────────────────────────────

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

// ─── Brands ─────────────────────────────────────────────────────

export function getAllBrands(): Brand[] {
  return brands;
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
