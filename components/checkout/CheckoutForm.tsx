"use client";

import { Input } from "@/components/ui/input";

export function CheckoutForm(): React.ReactElement {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold">Delivery Information</h3>
      <Input placeholder="Full Name" />
      <Input placeholder="Phone Number" type="tel" />
      <Input placeholder="Street Address" />
      <Input placeholder="City / Area" />
      <Input placeholder="Landmark (optional)" />
    </div>
  );
}
