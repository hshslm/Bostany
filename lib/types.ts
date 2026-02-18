// ─── Product Domain ─────────────────────────────────────────────

export interface Brand {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  logoUrl: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  image: string;
  accentColor: string;
  productCount: number;
}

export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inStock: boolean;
  weight: string;
}

export interface NutritionalInfo {
  servingSize: string;
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
  sodium: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  brand: Brand;
  category: Category;
  images: string[];
  variants: ProductVariant[];
  badges: Array<"bestseller" | "new" | "sale">;
  features: string[];
  nutritionalInfo?: NutritionalInfo;
  isActive: boolean;
}

// ─── Cart & Checkout ────────────────────────────────────────────

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  governorate: string;
  city: string;
  streetAddress: string;
  building: string;
  landmark?: string;
  notes?: string;
}

export type PaymentMethod = "cod" | "card_delivery" | "online" | "wallet";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  userId: string | null;
  guestPhone: string | null;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentStatus: "pending" | "paid" | "failed";
  orderStatus: OrderStatus;
  shippingTrackingId?: string;
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  promoCode?: string;
  notes?: string;
  createdAt: string;
}

// ─── Misc ───────────────────────────────────────────────────────

export interface RetailPartner {
  name: string;
  logoUrl: string;
  tier: "premium" | "mass" | "regional" | "digital";
}
