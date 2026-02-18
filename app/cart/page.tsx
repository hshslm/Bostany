"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, Lock, Banknote, ChevronUp } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// ─── Constants ──────────────────────────────────────────────────

const MAX_QTY = 10;
const FREE_SHIPPING_THRESHOLD = 300;
const VALID_PROMO = "BOSTANY10";
const PROMO_DISCOUNT = 0.1;

// ─── Cart Item Row ──────────────────────────────────────────────

interface CartItemRowProps {
  item: { product: { id: string; name: string; nameAr: string; slug: string; images: string[]; brand: { name: string; color: string } }; variant: { id: string; size: string; price: number; compareAtPrice?: number }; quantity: number };
  onUpdateQuantity: (productId: string, variantId: string, quantity: number) => void;
  onRemove: (productId: string, variantId: string) => void;
}

function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemRowProps): React.ReactElement | null {
  const [isRemoving, setIsRemoving] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleRemove = useCallback((): void => {
    setIsRemoving(true);
    // Wait for animation to complete before actually removing
    setTimeout(() => {
      onRemove(item.product.id, item.variant.id);
    }, 300);
  }, [item.product.id, item.variant.id, onRemove]);

  const handleDecrement = useCallback((): void => {
    if (item.quantity <= 1) {
      handleRemove();
      return;
    }
    onUpdateQuantity(item.product.id, item.variant.id, item.quantity - 1);
  }, [item.product.id, item.variant.id, item.quantity, onUpdateQuantity, handleRemove]);

  const handleIncrement = useCallback((): void => {
    if (item.quantity >= MAX_QTY) return;
    onUpdateQuantity(item.product.id, item.variant.id, item.quantity + 1);
  }, [item.product.id, item.variant.id, item.quantity, onUpdateQuantity]);

  const lineTotal = item.variant.price * item.quantity;

  return (
    <div
      ref={rowRef}
      className={`cart-item-row transition-all duration-300 ease-in-out ${
        isRemoving ? "cart-item-removing" : ""
      }`}
    >
      <div className="flex gap-4 py-5">
        {/* Product Image */}
        <Link
          href={`/product/${item.product.slug}`}
          className="flex-shrink-0 overflow-hidden rounded-card bg-cream"
        >
          <Image
            src={item.product.images[0] || "/images/placeholder.jpg"}
            alt={item.product.name}
            width={80}
            height={80}
            className="h-20 w-20 object-contain p-1"
          />
        </Link>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between min-w-0">
          <div>
            {/* Brand */}
            <span
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: item.product.brand.color }}
            >
              {item.product.brand.name}
            </span>

            {/* Name */}
            <Link
              href={`/product/${item.product.slug}`}
              className="mt-0.5 block text-sm font-semibold text-charcoal hover:text-bostany-red transition-colors truncate"
            >
              {item.product.name}
            </Link>

            {/* Arabic name */}
            <p className="font-arabic text-xs text-slate/60" dir="rtl">
              {item.product.nameAr}
            </p>

            {/* Variant */}
            <span className="mt-1 inline-block rounded-full bg-cream px-2 py-0.5 text-[11px] font-medium text-slate">
              {item.variant.size}
            </span>
          </div>

          {/* Bottom row: qty stepper + price + remove */}
          <div className="mt-3 flex items-center justify-between">
            {/* Quantity Stepper */}
            <div className="flex items-center rounded-btn border border-light-border">
              <button
                onClick={handleDecrement}
                className="flex h-8 w-8 items-center justify-center text-slate transition-colors hover:text-charcoal disabled:opacity-30"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-semibold text-charcoal">
                {item.quantity}
              </span>
              <button
                onClick={handleIncrement}
                disabled={item.quantity >= MAX_QTY}
                className="flex h-8 w-8 items-center justify-center text-slate transition-colors hover:text-charcoal disabled:opacity-30"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Price + Remove */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-charcoal">
                EGP {lineTotal.toFixed(0)}
              </span>
              <button
                onClick={handleRemove}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate/40 transition-colors hover:bg-bostany-red/5 hover:text-bostany-red md:opacity-0 md:group-hover/row:opacity-100"
                aria-label={`Remove ${item.product.name}`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Empty Cart ─────────────────────────────────────────────────

function EmptyCart(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream">
        <ShoppingBag className="h-10 w-10 text-slate/40" />
      </div>
      <h2 className="mt-6 font-display text-2xl font-bold text-charcoal">
        Your cart is empty
      </h2>
      <p className="mt-2 max-w-sm text-sm text-slate">
        Looks like you haven&apos;t added any products yet. Browse our collection to find something you&apos;ll love.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/shop">Start Shopping</Link>
      </Button>
    </div>
  );
}

// ─── Order Summary ──────────────────────────────────────────────

interface OrderSummaryProps {
  subtotal: number;
  promoCode: string;
  promoApplied: boolean;
  promoError: string;
  onPromoChange: (val: string) => void;
  onApplyPromo: () => void;
  onRemovePromo: () => void;
}

function OrderSummary({
  subtotal,
  promoCode,
  promoApplied,
  promoError,
  onPromoChange,
  onApplyPromo,
  onRemovePromo,
}: OrderSummaryProps): React.ReactElement {
  const discount = promoApplied ? subtotal * PROMO_DISCOUNT : 0;
  const afterDiscount = subtotal - discount;
  const freeShipping = afterDiscount >= FREE_SHIPPING_THRESHOLD;
  const total = afterDiscount;

  return (
    <div className="rounded-card border border-light-border bg-white p-6 shadow-sm">
      <h2 className="font-display text-lg font-bold text-charcoal">
        Order Summary
      </h2>

      <div className="mt-5 space-y-3">
        {/* Subtotal */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate">Subtotal</span>
          <span className="font-medium text-charcoal">EGP {subtotal.toFixed(0)}</span>
        </div>

        {/* Discount */}
        {promoApplied && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-olive-green">Discount (10%)</span>
            <span className="font-medium text-olive-green">-EGP {discount.toFixed(0)}</span>
          </div>
        )}

        {/* Shipping */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate">Shipping</span>
          <span className={`font-medium ${freeShipping ? "text-olive-green" : "text-slate"}`}>
            {freeShipping ? "Free" : "Calculated at checkout"}
          </span>
        </div>

        {/* Free shipping progress */}
        {!freeShipping && (
          <div className="rounded-btn bg-cream p-3">
            <p className="text-xs text-slate">
              Add{" "}
              <span className="font-semibold text-charcoal">
                EGP {(FREE_SHIPPING_THRESHOLD - afterDiscount).toFixed(0)}
              </span>{" "}
              more for free shipping
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-light-border">
              <div
                className="h-full rounded-full bg-heritage-gold transition-all duration-500"
                style={{ width: `${Math.min((afterDiscount / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Promo Code */}
      <div className="mt-5">
        {promoApplied ? (
          <div className="flex items-center justify-between rounded-btn bg-olive-green/5 px-3 py-2.5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-olive-green">
                {VALID_PROMO}
              </span>
              <span className="ml-2 text-xs text-slate">10% off applied</span>
            </div>
            <button
              onClick={onRemovePromo}
              className="text-xs font-medium text-slate hover:text-bostany-red transition-colors"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Input
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => onPromoChange(e.target.value.toUpperCase())}
              className="flex-1 text-xs uppercase tracking-wider"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={onApplyPromo}
              disabled={!promoCode.trim()}
              className="px-4"
            >
              Apply
            </Button>
          </div>
        )}
        {promoError && (
          <p className="mt-1.5 text-xs text-bostany-red">{promoError}</p>
        )}
      </div>

      <Separator className="my-5" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-charcoal">Total</span>
        <span className="font-display text-2xl font-bold text-charcoal">
          EGP {total.toFixed(0)}
        </span>
      </div>

      {/* Checkout Button */}
      <Button asChild size="lg" className="mt-5 w-full">
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>

      {/* Trust Badges */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5 text-[11px] text-slate/60">
          <Lock className="h-3.5 w-3.5" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate/60">
          <Banknote className="h-3.5 w-3.5" />
          <span>Cash on Delivery</span>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-4 text-center">
        <Link
          href="/shop"
          className="text-sm text-slate underline-offset-4 transition-colors hover:text-bostany-red hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

// ─── Main Cart Page ─────────────────────────────────────────────

export default function CartPage(): React.ReactElement {
  const { items, updateQuantity, removeItem, clearCart, totalItems, subtotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [summaryOpen, setSummaryOpen] = useState(false);

  const handleApplyPromo = useCallback((): void => {
    if (promoCode.trim() === VALID_PROMO) {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code. Try BOSTANY10");
      setPromoApplied(false);
    }
  }, [promoCode]);

  const handleRemovePromo = useCallback((): void => {
    setPromoApplied(false);
    setPromoCode("");
    setPromoError("");
  }, []);

  const discount = promoApplied ? subtotal * PROMO_DISCOUNT : 0;
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="font-display text-3xl font-bold text-charcoal">
          Shopping Cart
        </h1>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-display text-3xl font-bold text-charcoal">
            Shopping Cart
          </h1>
          <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-slate">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
        <button
          onClick={clearCart}
          className="text-sm text-slate transition-colors hover:text-bostany-red"
        >
          Clear all
        </button>
      </div>

      {/* Two-column layout */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left — Cart Items */}
        <div>
          {items.map((item, index) => (
            <div key={`${item.product.id}-${item.variant.id}`} className="group/row">
              <CartItemRow
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
              {index < items.length - 1 && (
                <Separator />
              )}
            </div>
          ))}
        </div>

        {/* Right — Order Summary (Desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <OrderSummary
              subtotal={subtotal}
              promoCode={promoCode}
              promoApplied={promoApplied}
              promoError={promoError}
              onPromoChange={setPromoCode}
              onApplyPromo={handleApplyPromo}
              onRemovePromo={handleRemovePromo}
            />
          </div>
        </div>
      </div>

      {/* Mobile — Sticky Bottom Bar + Expandable Summary */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        {/* Expandable Summary Panel */}
        <div
          className={`overflow-hidden border-t border-light-border bg-white transition-all duration-300 ease-in-out ${
            summaryOpen ? "max-h-[70vh] overflow-y-auto" : "max-h-0 border-t-0"
          }`}
        >
          <div className="p-4">
            <OrderSummary
              subtotal={subtotal}
              promoCode={promoCode}
              promoApplied={promoApplied}
              promoError={promoError}
              onPromoChange={setPromoCode}
              onApplyPromo={handleApplyPromo}
              onRemovePromo={handleRemovePromo}
            />
          </div>
        </div>

        {/* Sticky Bar */}
        <div className="border-t border-light-border bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between gap-3">
            {/* Total + expand toggle */}
            <button
              onClick={() => setSummaryOpen(!summaryOpen)}
              className="flex items-center gap-2"
            >
              <div>
                <p className="text-xs text-slate">Total</p>
                <p className="font-display text-xl font-bold text-charcoal">
                  EGP {total.toFixed(0)}
                </p>
              </div>
              <ChevronUp
                className={`h-4 w-4 text-slate transition-transform duration-200 ${
                  summaryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Checkout button */}
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="/checkout">Checkout</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
