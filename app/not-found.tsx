import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound(): React.ReactElement {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-heritage-gold/30">
        <span className="font-display text-4xl font-bold text-heritage-gold">404</span>
      </div>
      <h1 className="mt-8 font-display text-3xl font-bold text-charcoal">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-base text-slate">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <p className="mt-2 font-arabic text-sm text-slate/50" dir="rtl">
        الصفحة غير موجودة
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/shop">Shop Products</Link>
        </Button>
      </div>
    </div>
  );
}
