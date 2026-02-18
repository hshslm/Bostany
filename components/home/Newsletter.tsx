"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#f0ebe3] to-cream py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold">Stay Updated</h2>
        <p className="mt-2 text-base text-slate">
          Get notified about new products and exclusive offers
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 max-w-md rounded-card bg-warm-white p-6 shadow-sm">
            <p className="font-display text-lg font-semibold text-corn-green">
              Thank you for subscribing!
            </p>
            <p className="mt-1 text-sm text-slate">
              We&apos;ll keep you in the loop with what&apos;s new.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-warm-white"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-slate/60">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
