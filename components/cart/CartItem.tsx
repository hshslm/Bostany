"use client";

interface CartItemProps {
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartItem({ name, variant, price, quantity, image }: CartItemProps): React.ReactElement {
  return (
    <div className="flex items-center gap-4 rounded-card border border-light-border bg-warm-white p-4">
      <div className="h-20 w-20 rounded-md bg-cream" />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-slate">{variant}</p>
        <p className="mt-1 font-bold">EGP {price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex h-8 w-8 items-center justify-center rounded-btn border border-light-border text-sm">-</button>
        <span className="w-8 text-center text-sm">{quantity}</span>
        <button className="flex h-8 w-8 items-center justify-center rounded-btn border border-light-border text-sm">+</button>
      </div>
    </div>
  );
}
