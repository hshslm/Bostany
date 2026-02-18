"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Check,
  Lock,
  CreditCard,
  Smartphone,
  Banknote,
  Truck,
  Pencil,
  ShoppingBag,
  ChevronUp,
} from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import type { PaymentMethod } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ─── Constants ──────────────────────────────────────────────────

const SHIPPING_FEE = 30;
const FREE_SHIPPING_THRESHOLD = 300;
const COD_FEE = 10;

const GOVERNORATES = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Damietta",
  "Dakahlia",
  "Sharqia",
  "Qalyubia",
  "Gharbia",
  "Monufia",
  "Beheira",
  "Port Said",
  "Suez",
  "Ismailia",
  "Red Sea",
  "Luxor",
  "Aswan",
  "Fayoum",
  "Minya",
  "Assiut",
  "Sohag",
  "New Valley",
  "Matruh",
  "North Sinai",
  "South Sinai",
  "Kafr El Sheikh",
  "Beni Suef",
  "Qena",
] as const;

const PAYMENT_OPTIONS: {
  id: PaymentMethod;
  icon: typeof Banknote;
  label: string;
  labelAr: string;
  subtitle: string;
  note?: string;
}[] = [
  {
    id: "cod",
    icon: Banknote,
    label: "Cash on Delivery",
    labelAr: "الدفع عند الاستلام",
    subtitle: "Pay cash when your order arrives",
    note: "COD fee: EGP 10 will be added",
  },
  {
    id: "card_delivery",
    icon: CreditCard,
    label: "Card on Delivery",
    labelAr: "كارت عند الاستلام",
    subtitle: "Pay by Visa/Mastercard when delivered",
  },
  {
    id: "online",
    icon: Lock,
    label: "Pay Online",
    labelAr: "ادفع أونلاين",
    subtitle: "Secure payment via credit/debit card",
  },
  {
    id: "wallet",
    icon: Smartphone,
    label: "Mobile Wallet",
    labelAr: "محفظة إلكترونية",
    subtitle: "Vodafone Cash, Orange Money, Etisalat Cash",
  },
];

// ─── Types ──────────────────────────────────────────────────────

interface DeliveryForm {
  fullName: string;
  phone: string;
  email: string;
  governorate: string;
  city: string;
  streetAddress: string;
  building: string;
  landmark: string;
  notes: string;
}

const INITIAL_DELIVERY: DeliveryForm = {
  fullName: "",
  phone: "",
  email: "",
  governorate: "",
  city: "",
  streetAddress: "",
  building: "",
  landmark: "",
  notes: "",
};

// ─── Section Header ─────────────────────────────────────────────

interface SectionHeaderProps {
  step: number;
  title: string;
  isOpen: boolean;
  isComplete: boolean;
  onClick: () => void;
}

function SectionHeader({
  step,
  title,
  isOpen,
  isComplete,
  onClick,
}: SectionHeaderProps): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 py-4 text-left"
    >
      {/* Step badge */}
      <span
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
          isComplete
            ? "bg-olive-green text-white"
            : isOpen
              ? "bg-bostany-red text-white"
              : "bg-cream text-slate"
        }`}
      >
        {isComplete ? <Check className="h-4 w-4" /> : step}
      </span>
      <span
        className={`flex-1 font-display text-lg font-semibold ${
          isOpen ? "text-charcoal" : "text-slate"
        }`}
      >
        {title}
      </span>
      <ChevronDown
        className={`h-5 w-5 text-slate transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

// ─── Form Field ─────────────────────────────────────────────────

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: boolean;
  children: React.ReactNode;
}

function FormField({
  label,
  required = false,
  error = false,
  children,
}: FormFieldProps): React.ReactElement {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {required && <span className="ml-0.5 text-bostany-red">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-bostany-red">This field is required</p>
      )}
    </div>
  );
}

// ─── Payment Card Option ────────────────────────────────────────

interface PaymentCardProps {
  option: (typeof PAYMENT_OPTIONS)[number];
  selected: boolean;
  onSelect: () => void;
}

function PaymentCard({
  option,
  selected,
  onSelect,
}: PaymentCardProps): React.ReactElement {
  const Icon = option.icon;
  return (
    <button
      onClick={onSelect}
      className={`w-full rounded-card border-2 p-4 text-left transition-all ${
        selected
          ? "border-bostany-red bg-bostany-red/[0.02]"
          : "border-light-border hover:border-slate/30"
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Radio indicator */}
        <span
          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
            selected ? "border-bostany-red" : "border-light-border"
          }`}
        >
          {selected && (
            <span className="h-2.5 w-2.5 rounded-full bg-bostany-red" />
          )}
        </span>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Icon className="h-4.5 w-4.5 text-charcoal" />
            <span className="text-sm font-semibold text-charcoal">
              {option.label}
            </span>
            <span className="font-arabic text-xs text-slate">
              {option.labelAr}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate">{option.subtitle}</p>
          {option.note && (
            <p className="mt-1.5 rounded bg-heritage-gold/10 px-2 py-1 text-[11px] font-medium text-heritage-gold">
              {option.note}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── Compact Order Item ─────────────────────────────────────────

interface CompactItemProps {
  item: {
    product: { name: string; images: string[] };
    variant: { size: string; price: number };
    quantity: number;
  };
}

function CompactItem({ item }: CompactItemProps): React.ReactElement {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-btn bg-cream">
        <Image
          src={item.product.images[0] || "/images/placeholder.jpg"}
          alt={item.product.name}
          fill
          className="object-contain p-1"
        />
        {/* Quantity badge */}
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal text-[10px] font-semibold text-white">
          {item.quantity}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-charcoal">
          {item.product.name}
        </p>
        <p className="text-xs text-slate">{item.variant.size}</p>
      </div>
      <span className="text-sm font-semibold text-charcoal">
        EGP {(item.variant.price * item.quantity).toFixed(0)}
      </span>
    </div>
  );
}

// ─── Main Checkout Page ─────────────────────────────────────────

export default function CheckoutPage(): React.ReactElement {
  const router = useRouter();
  const { items, totalItems, subtotal, clearCart } = useCart();

  // Section state
  const [activeSection, setActiveSection] = useState(1);
  const [deliveryComplete, setDeliveryComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Delivery form
  const [delivery, setDelivery] = useState<DeliveryForm>(INITIAL_DELIVERY);
  const [deliveryErrors, setDeliveryErrors] = useState<Set<string>>(new Set());

  // Payment
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | "">("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [walletPhone, setWalletPhone] = useState("");

  // Review
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isPlacing, setIsPlacing] = useState(false);

  // Mobile
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  // ─── Computed ───────────────────────────────────────

  const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = freeShipping ? 0 : SHIPPING_FEE;
  const codFee = paymentMethod === "cod" ? COD_FEE : 0;
  const total = subtotal + shippingFee + codFee;

  // ─── Delivery handlers ─────────────────────────────

  const updateField = useCallback(
    (field: keyof DeliveryForm, value: string): void => {
      setDelivery((prev) => ({ ...prev, [field]: value }));
      setDeliveryErrors((prev) => {
        const next = new Set(prev);
        next.delete(field);
        return next;
      });
    },
    []
  );

  const validateDelivery = useCallback((): boolean => {
    const required: (keyof DeliveryForm)[] = [
      "fullName",
      "phone",
      "governorate",
      "city",
      "streetAddress",
      "building",
    ];
    const errors = new Set<string>();
    for (const field of required) {
      if (!delivery[field].trim()) {
        errors.add(field);
      }
    }
    setDeliveryErrors(errors);
    return errors.size === 0;
  }, [delivery]);

  const handleDeliveryContinue = useCallback((): void => {
    if (validateDelivery()) {
      setDeliveryComplete(true);
      setActiveSection(2);
    }
  }, [validateDelivery]);

  // ─── Payment handlers ──────────────────────────────

  const handlePaymentContinue = useCallback((): void => {
    if (!paymentMethod) return;
    setPaymentComplete(true);
    setActiveSection(3);
  }, [paymentMethod]);

  // ─── Place order ───────────────────────────────────

  const handlePlaceOrder = useCallback((): void => {
    if (!agreedToTerms || !deliveryComplete || !paymentComplete) return;
    setIsPlacing(true);
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 600);
  }, [agreedToTerms, deliveryComplete, paymentComplete, clearCart, router]);

  // ─── Section toggle ────────────────────────────────

  const toggleSection = useCallback(
    (section: number): void => {
      if (section === 1) {
        setActiveSection(activeSection === 1 ? 0 : 1);
      } else if (section === 2 && deliveryComplete) {
        setActiveSection(activeSection === 2 ? 0 : 2);
      } else if (section === 3 && paymentComplete) {
        setActiveSection(activeSection === 3 ? 0 : 3);
      }
    },
    [activeSection, deliveryComplete, paymentComplete]
  );

  // ─── Edit section ──────────────────────────────────

  const editSection = useCallback((section: number): void => {
    setActiveSection(section);
  }, []);

  // ─── Payment method label ──────────────────────────

  const paymentLabel = useMemo((): string => {
    const option = PAYMENT_OPTIONS.find((o) => o.id === paymentMethod);
    return option ? `${option.label} (${option.labelAr})` : "";
  }, [paymentMethod]);

  // ─── Can place order ──────────────────────────────

  const canPlaceOrder =
    deliveryComplete && paymentComplete && agreedToTerms && !isPlacing;

  // ─── Empty cart redirect ──────────────────────────

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream">
          <ShoppingBag className="h-10 w-10 text-slate/40" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-charcoal">
          Your cart is empty
        </h1>
        <p className="mt-2 text-sm text-slate">
          Add some products before checking out.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/shop">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-10">
      {/* Page Header */}
      <h1 className="font-display text-3xl font-bold text-charcoal">
        Checkout
      </h1>

      {/* Mobile Order Summary Toggle */}
      <button
        onClick={() => setMobileSummaryOpen(!mobileSummaryOpen)}
        className="mt-4 flex w-full items-center justify-between rounded-card border border-light-border bg-white p-4 lg:hidden"
      >
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4 text-slate" />
          <span className="text-sm font-medium text-charcoal">
            Order Summary ({totalItems} {totalItems === 1 ? "item" : "items"})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold text-charcoal">
            EGP {total.toFixed(0)}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-slate transition-transform duration-200 ${
              mobileSummaryOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Expandable Summary */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileSummaryOpen ? "max-h-[600px] mt-2" : "max-h-0"
        }`}
      >
        <div className="rounded-card border border-light-border bg-white p-4">
          {items.map((item) => (
            <CompactItem
              key={`${item.product.id}-${item.variant.id}`}
              item={item}
            />
          ))}
          <Separator className="my-3" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate">Subtotal</span>
              <span className="font-medium">EGP {subtotal.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate">Shipping</span>
              <span
                className={freeShipping ? "font-medium text-olive-green" : ""}
              >
                {freeShipping ? "Free" : `EGP ${SHIPPING_FEE}`}
              </span>
            </div>
            {codFee > 0 && (
              <div className="flex justify-between">
                <span className="text-slate">COD Fee</span>
                <span>EGP {COD_FEE}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[1fr_400px]">
        {/* ─── LEFT: Checkout Form ──────────────────────── */}
        <div className="space-y-1">
          {/* ── Section 1: Delivery ──────────────────── */}
          <div className="rounded-card border border-light-border bg-white">
            <div className="px-5">
              <SectionHeader
                step={1}
                title="Delivery Information"
                isOpen={activeSection === 1}
                isComplete={deliveryComplete}
                onClick={() => toggleSection(1)}
              />
            </div>

            {/* Completed summary */}
            {deliveryComplete && activeSection !== 1 && (
              <div className="border-t border-light-border px-5 py-4">
                <div className="flex items-start justify-between">
                  <div className="text-sm text-slate">
                    <p className="font-medium text-charcoal">
                      {delivery.fullName}
                    </p>
                    <p>{delivery.phone}</p>
                    <p>
                      {delivery.streetAddress}, {delivery.building}
                    </p>
                    <p>
                      {delivery.city}, {delivery.governorate}
                    </p>
                  </div>
                  <button
                    onClick={() => editSection(1)}
                    className="flex items-center gap-1 text-xs font-medium text-bostany-red hover:underline"
                  >
                    <Pencil className="h-3 w-3" />
                    Edit
                  </button>
                </div>
              </div>
            )}

            {/* Form fields */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSection === 1 ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-4 border-t border-light-border px-5 pb-5 pt-4">
                {/* Name + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    required
                    error={deliveryErrors.has("fullName")}
                  >
                    <Input
                      placeholder="Ahmed Mohamed"
                      value={delivery.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className={
                        deliveryErrors.has("fullName")
                          ? "border-bostany-red"
                          : ""
                      }
                    />
                  </FormField>
                  <FormField
                    label="Phone Number"
                    required
                    error={deliveryErrors.has("phone")}
                  >
                    <Input
                      placeholder="01XXXXXXXXX"
                      inputMode="tel"
                      type="tel"
                      value={delivery.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={
                        deliveryErrors.has("phone")
                          ? "border-bostany-red"
                          : ""
                      }
                    />
                  </FormField>
                </div>

                {/* Email */}
                <FormField label="Email" required={false}>
                  <Input
                    type="email"
                    inputMode="email"
                    placeholder="your@email.com (optional)"
                    value={delivery.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </FormField>

                {/* Governorate + City */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Governorate"
                    required
                    error={deliveryErrors.has("governorate")}
                  >
                    <Select
                      value={delivery.governorate}
                      onValueChange={(val) => updateField("governorate", val)}
                    >
                      <SelectTrigger
                        className={
                          deliveryErrors.has("governorate")
                            ? "border-bostany-red"
                            : ""
                        }
                      >
                        <SelectValue placeholder="Select governorate" />
                      </SelectTrigger>
                      <SelectContent>
                        {GOVERNORATES.map((gov) => (
                          <SelectItem key={gov} value={gov}>
                            {gov}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField
                    label="City / Area"
                    required
                    error={deliveryErrors.has("city")}
                  >
                    <Input
                      placeholder="e.g. Maadi, Zamalek"
                      value={delivery.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className={
                        deliveryErrors.has("city") ? "border-bostany-red" : ""
                      }
                    />
                  </FormField>
                </div>

                {/* Street + Building */}
                <FormField
                  label="Street Address"
                  required
                  error={deliveryErrors.has("streetAddress")}
                >
                  <Input
                    placeholder="Street name and number"
                    value={delivery.streetAddress}
                    onChange={(e) =>
                      updateField("streetAddress", e.target.value)
                    }
                    className={
                      deliveryErrors.has("streetAddress")
                        ? "border-bostany-red"
                        : ""
                    }
                  />
                </FormField>

                <FormField
                  label="Building / Floor / Apartment"
                  required
                  error={deliveryErrors.has("building")}
                >
                  <Input
                    placeholder="Building 5, Floor 3, Apt 12"
                    value={delivery.building}
                    onChange={(e) => updateField("building", e.target.value)}
                    className={
                      deliveryErrors.has("building")
                        ? "border-bostany-red"
                        : ""
                    }
                  />
                </FormField>

                {/* Landmark */}
                <FormField label="Landmark">
                  <Input
                    placeholder="Near mosque, school, etc."
                    value={delivery.landmark}
                    onChange={(e) => updateField("landmark", e.target.value)}
                  />
                </FormField>

                {/* Delivery Notes */}
                <FormField label="Delivery Notes">
                  <textarea
                    placeholder="Any special instructions..."
                    value={delivery.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    rows={3}
                    className="flex w-full rounded-input border border-input bg-warm-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  />
                </FormField>

                <Button onClick={handleDeliveryContinue} size="lg">
                  Continue to Payment
                </Button>
              </div>
            </div>
          </div>

          {/* ── Section 2: Payment ───────────────────── */}
          <div className="rounded-card border border-light-border bg-white">
            <div className="px-5">
              <SectionHeader
                step={2}
                title="Payment Method"
                isOpen={activeSection === 2}
                isComplete={paymentComplete}
                onClick={() => toggleSection(2)}
              />
            </div>

            {/* Completed summary */}
            {paymentComplete && activeSection !== 2 && (
              <div className="border-t border-light-border px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate">{paymentLabel}</span>
                  <button
                    onClick={() => editSection(2)}
                    className="flex items-center gap-1 text-xs font-medium text-bostany-red hover:underline"
                  >
                    <Pencil className="h-3 w-3" />
                    Edit
                  </button>
                </div>
              </div>
            )}

            {/* Payment options */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSection === 2 ? "max-h-[1200px]" : "max-h-0"
              }`}
            >
              <div className="space-y-3 border-t border-light-border px-5 pb-5 pt-4">
                {PAYMENT_OPTIONS.map((option) => (
                  <div key={option.id}>
                    <PaymentCard
                      option={option}
                      selected={paymentMethod === option.id}
                      onSelect={() => setPaymentMethod(option.id)}
                    />

                    {/* Online card fields */}
                    {option.id === "online" && paymentMethod === "online" && (
                      <div className="mt-3 ml-8 space-y-3 rounded-card border border-light-border bg-cream/50 p-4">
                        <Input
                          placeholder="Card Number"
                          inputMode="numeric"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            placeholder="MM/YY"
                            inputMode="numeric"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                          />
                          <Input
                            placeholder="CVV"
                            inputMode="numeric"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                          />
                        </div>
                        <p className="text-[11px] text-slate">
                          Powered by Paymob
                        </p>
                      </div>
                    )}

                    {/* Wallet phone field */}
                    {option.id === "wallet" && paymentMethod === "wallet" && (
                      <div className="mt-3 ml-8 rounded-card border border-light-border bg-cream/50 p-4">
                        <Input
                          placeholder="Wallet phone number (01XXXXXXXXX)"
                          inputMode="tel"
                          type="tel"
                          value={walletPhone}
                          onChange={(e) => setWalletPhone(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                ))}

                <Button
                  onClick={handlePaymentContinue}
                  size="lg"
                  disabled={!paymentMethod}
                >
                  Continue to Review
                </Button>
              </div>
            </div>
          </div>

          {/* ── Section 3: Review ────────────────────── */}
          <div className="rounded-card border border-light-border bg-white">
            <div className="px-5">
              <SectionHeader
                step={3}
                title="Review Order"
                isOpen={activeSection === 3}
                isComplete={false}
                onClick={() => toggleSection(3)}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSection === 3 ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="border-t border-light-border px-5 pb-5 pt-4">
                {/* Delivery summary */}
                <div className="rounded-btn border border-light-border bg-cream/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-slate" />
                      <span className="text-sm font-semibold text-charcoal">
                        Delivery Address
                      </span>
                    </div>
                    <button
                      onClick={() => editSection(1)}
                      className="text-xs font-medium text-bostany-red hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="mt-2 text-sm text-slate">
                    <p className="font-medium text-charcoal">
                      {delivery.fullName}
                    </p>
                    <p>{delivery.phone}</p>
                    <p>
                      {delivery.streetAddress}, {delivery.building}
                    </p>
                    <p>
                      {delivery.city}, {delivery.governorate}
                    </p>
                    {delivery.landmark && (
                      <p className="text-xs text-slate/60">
                        Landmark: {delivery.landmark}
                      </p>
                    )}
                  </div>
                </div>

                {/* Payment summary */}
                <div className="mt-3 rounded-btn border border-light-border bg-cream/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-slate" />
                      <span className="text-sm font-semibold text-charcoal">
                        Payment
                      </span>
                    </div>
                    <button
                      onClick={() => editSection(2)}
                      className="text-xs font-medium text-bostany-red hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-slate">{paymentLabel}</p>
                </div>

                {/* Order items */}
                <div className="mt-3 rounded-btn border border-light-border bg-cream/50 p-4">
                  <p className="text-sm font-semibold text-charcoal">
                    Order Items ({totalItems})
                  </p>
                  <div className="mt-2">
                    {items.map((item) => (
                      <CompactItem
                        key={`${item.product.id}-${item.variant.id}`}
                        item={item}
                      />
                    ))}
                  </div>
                </div>

                {/* Estimated delivery */}
                <div className="mt-4 flex items-center gap-2 rounded-btn bg-olive-green/5 px-4 py-3">
                  <Truck className="h-4 w-4 text-olive-green" />
                  <span className="text-sm text-olive-green">
                    Estimated delivery: 2-4 business days
                  </span>
                </div>

                {/* Terms */}
                <label className="mt-5 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="filter-checkbox mt-0.5"
                  />
                  <span className="text-sm text-slate">
                    I agree to the{" "}
                    <span className="font-medium text-charcoal underline underline-offset-2">
                      Terms &amp; Conditions
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-charcoal underline underline-offset-2">
                      Privacy Policy
                    </span>
                  </span>
                </label>

                {/* Place Order (desktop) */}
                <div className="mt-6 hidden lg:block">
                  <Button
                    onClick={handlePlaceOrder}
                    size="lg"
                    className="w-full"
                    disabled={!canPlaceOrder}
                  >
                    {isPlacing ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Placing Order...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Place Order — EGP {total.toFixed(0)}
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Order Summary (Desktop) ───────── */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="rounded-card border border-light-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-charcoal">
                Order Summary
              </h2>

              {/* Items list */}
              <div className="mt-4 max-h-60 overflow-y-auto scrollbar-on-hover">
                {items.map((item) => (
                  <CompactItem
                    key={`summary-${item.product.id}-${item.variant.id}`}
                    item={item}
                  />
                ))}
              </div>

              <Separator className="my-4" />

              {/* Totals */}
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate">Subtotal</span>
                  <span className="font-medium text-charcoal">
                    EGP {subtotal.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Shipping</span>
                  <span
                    className={
                      freeShipping ? "font-medium text-olive-green" : ""
                    }
                  >
                    {freeShipping ? "Free" : `EGP ${SHIPPING_FEE}`}
                  </span>
                </div>
                {codFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate">COD Fee</span>
                    <span>EGP {COD_FEE}</span>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-charcoal">
                  Total
                </span>
                <span className="font-display text-2xl font-bold text-bostany-red">
                  EGP {total.toFixed(0)}
                </span>
              </div>

              {/* Trust badges */}
              <div className="mt-5 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5 text-[11px] text-slate/60">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate/60">
                  <Truck className="h-3.5 w-3.5" />
                  <span>2-4 Days</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate/60">
                  <Banknote className="h-3.5 w-3.5" />
                  <span>COD Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile Sticky Bottom Bar ───────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-light-border bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-slate">Total</p>
            <p className="font-display text-xl font-bold text-charcoal">
              EGP {total.toFixed(0)}
            </p>
          </div>
          {activeSection === 3 && deliveryComplete && paymentComplete ? (
            <Button
              onClick={handlePlaceOrder}
              size="lg"
              className="min-w-[160px]"
              disabled={!canPlaceOrder}
            >
              {isPlacing ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Placing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Place Order
                </span>
              )}
            </Button>
          ) : (
            <Button
              size="lg"
              className="min-w-[160px]"
              onClick={() => {
                if (activeSection === 1) handleDeliveryContinue();
                else if (activeSection === 2) handlePaymentContinue();
                else setActiveSection(deliveryComplete ? (paymentComplete ? 3 : 2) : 1);
              }}
            >
              Continue
            </Button>
          )}
        </div>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
