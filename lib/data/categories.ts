import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "tuna",
    name: "Tuna",
    nameAr: "تونة",
    slug: "tuna",
    image: "/images/products/tuna/tuna-combo.jpeg",
    accentColor: "#D4382C",
    productCount: 2,
  },
  {
    id: "olive-oil",
    name: "Olive Oil",
    nameAr: "زيت زيتون",
    slug: "olive-oil",
    image: "/images/products/olive-oil/extra-virgin-olive-oil-500ml.jpeg",
    accentColor: "#4A5D23",
    productCount: 4,
  },
  {
    id: "rice-bran-oil",
    name: "Rice Bran Oil",
    nameAr: "زيت نخالة الأرز",
    slug: "rice-bran-oil",
    image: "/images/products/rice-bran-oil/rice-bran-oil-1l.jpeg",
    accentColor: "#2D8B47",
    productCount: 2,
  },
  {
    id: "canned-goods",
    name: "Canned Goods",
    nameAr: "معلبات",
    slug: "canned-goods",
    image: "/images/products/canned-goods/plain-fava-beans.jpeg",
    accentColor: "#D4382C",
    productCount: 2,
  },
  {
    id: "coffee",
    name: "Coffee",
    nameAr: "قهوة",
    slug: "coffee",
    image: "/images/products/coffee/gold-instant-coffee-200g.jpeg",
    accentColor: "#4A2C1A",
    productCount: 4,
  },
  {
    id: "cheese-dairy",
    name: "Cheese & Dairy",
    nameAr: "أجبان وألبان",
    slug: "cheese-dairy",
    image: "/images/products/cheese-dairy/feta-white-cheese.jpeg",
    accentColor: "#E8A825",
    productCount: 6,
  },
  {
    id: "juices",
    name: "Juices",
    nameAr: "عصائر",
    slug: "juices",
    image: "/images/products/juices/mango-juice.jpeg",
    accentColor: "#E87D1E",
    productCount: 5,
  },
  {
    id: "syrups",
    name: "Syrups",
    nameAr: "شراب",
    slug: "syrups",
    image: "/images/products/syrups/manutti-lineup.jpeg",
    accentColor: "#1B3A7B",
    productCount: 8,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
