"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Confetti Particle ──────────────────────────────────────────

function ConfettiParticles(): React.ReactElement {
  // Generate particles only on client
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 4 + Math.random() * 6,
      color: ["#C41E24", "#C5993A", "#4A5D23", "#1B3A7B", "#E87D1E"][
        Math.floor(Math.random() * 5)
      ],
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle absolute"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}

// ─── Success Page ───────────────────────────────────────────────

export default function CheckoutSuccessPage(): React.ReactElement {
  const [showConfetti, setShowConfetti] = useState(true);
  const [checkVisible, setCheckVisible] = useState(false);

  // Generate order number on client only
  const orderNumber = useMemo(() => {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `BOS-2025-${num}`;
  }, []);

  useEffect(() => {
    // Trigger check animation after mount
    const timer = setTimeout(() => setCheckVisible(true), 100);
    // Remove confetti after animation
    const confettiTimer = setTimeout(() => setShowConfetti(false), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimer);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    `I just ordered from Bostany! Order ${orderNumber} - Quality since 1900`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <>
      {showConfetti && <ConfettiParticles />}

      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
        {/* Animated Checkmark */}
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full transition-all duration-500 ${
            checkVisible
              ? "scale-100 bg-olive-green opacity-100"
              : "scale-50 bg-olive-green/50 opacity-0"
          }`}
        >
          <Check
            className={`h-12 w-12 text-white transition-all duration-300 delay-200 ${
              checkVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            strokeWidth={3}
          />
        </div>

        {/* Heading */}
        <h1 className="mt-8 font-display text-3xl font-bold text-charcoal md:text-4xl">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-slate">
          Thank you for shopping with Bostany
        </p>

        {/* Order number card */}
        <div className="mt-8 w-full max-w-md rounded-card border border-light-border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-sm text-slate">
            <Package className="h-4 w-4" />
            <span>Order Number</span>
          </div>
          <p className="mt-1 font-display text-2xl font-bold tracking-wide text-charcoal">
            {orderNumber}
          </p>

          <div className="mt-4 rounded-btn bg-olive-green/5 px-4 py-3">
            <p className="text-sm text-olive-green">
              Estimated delivery: 2-4 business days
            </p>
          </div>

          <div className="mt-4 space-y-2 text-sm text-slate">
            <p>A confirmation will be sent to your phone.</p>
            <p>You can track your order status anytime.</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <span className="flex items-center gap-2">
                Track Order
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>

        {/* WhatsApp share */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-5 py-2.5 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Share on WhatsApp
        </a>

        {/* Arabic message */}
        <p
          className="mt-4 font-arabic text-sm text-slate/60"
          dir="rtl"
        >
          شكراً لاختيارك بستاني — جودة من ١٩٠٠
        </p>
      </div>
    </>
  );
}
