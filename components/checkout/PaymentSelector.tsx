"use client";

import type { PaymentMethod } from "@/lib/types";

interface PaymentSelectorProps {
  selected: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

const methods: Array<{ id: PaymentMethod; label: string; labelAr: string; description: string }> = [
  { id: "cod", label: "Cash on Delivery", labelAr: "الدفع عند الاستلام", description: "COD fee: EGP 10" },
  { id: "card_delivery", label: "Card on Delivery", labelAr: "كارت عند الاستلام", description: "Visa / Mastercard" },
  { id: "online", label: "Pay Online", labelAr: "ادفع أونلاين", description: "Secure via Paymob" },
  { id: "wallet", label: "Mobile Wallet", labelAr: "محفظة إلكترونية", description: "Vodafone Cash / Orange" },
];

export function PaymentSelector({ selected, onSelect }: PaymentSelectorProps): React.ReactElement {
  return (
    <div className="space-y-3">
      <h3 className="font-display text-lg font-semibold">Payment Method</h3>
      {methods.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m.id)}
          className={`flex w-full items-center gap-4 rounded-card border-2 p-4 text-left transition-all ${
            selected === m.id
              ? "border-bostany-red shadow-sm"
              : "border-light-border hover:border-slate/30"
          }`}
        >
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
              selected === m.id ? "border-bostany-red" : "border-light-border"
            }`}
          >
            {selected === m.id && (
              <div className="h-2.5 w-2.5 rounded-full bg-bostany-red" />
            )}
          </div>
          <div>
            <p className="font-semibold">{m.label}</p>
            <p className="text-xs text-slate">{m.labelAr} &middot; {m.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
