import { Button } from "@/components/ui/button";

interface CartSummaryProps {
  subtotal: number;
  shippingFee: number;
  total: number;
}

export function CartSummary({ subtotal, shippingFee, total }: CartSummaryProps): React.ReactElement {
  return (
    <div className="rounded-card border border-light-border bg-warm-white p-6">
      <h3 className="font-display text-lg font-semibold">Order Summary</h3>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate">Subtotal</span>
          <span>EGP {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate">Shipping</span>
          <span>{shippingFee === 0 ? "Free" : `EGP ${shippingFee.toFixed(2)}`}</span>
        </div>
        <div className="border-t border-light-border pt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>EGP {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="mt-6 w-full" size="lg">
        Proceed to Checkout
      </Button>
    </div>
  );
}
