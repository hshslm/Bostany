"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import type { Product, ProductVariant, CartItem } from "@/lib/types";

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback(
    (product: Product, variant: ProductVariant, quantity: number = 1): void => {
      setItems((prev) => {
        const existing = prev.find(
          (item) => item.product.id === product.id && item.variant.id === variant.id
        );
        if (existing) {
          return prev.map((item) =>
            item.product.id === product.id && item.variant.id === variant.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prev, { product, variant, quantity }];
      });
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, variantId: string): void => {
      setItems((prev) =>
        prev.filter(
          (item) => !(item.product.id === productId && item.variant.id === variantId)
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, variantId: string, quantity: number): void => {
      if (quantity <= 0) {
        setItems((prev) =>
          prev.filter(
            (item) => !(item.product.id === productId && item.variant.id === variantId)
          )
        );
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.variant.id === variantId
            ? { ...item, quantity }
            : item
        )
      );
    },
    []
  );

  const clearCart = useCallback((): void => {
    setItems([]);
  }, []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
