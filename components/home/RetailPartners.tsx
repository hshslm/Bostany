import Image from "next/image";
import type { RetailPartner } from "@/lib/types";

interface RetailPartnersProps {
  partners: RetailPartner[];
}

export function RetailPartners({ partners }: RetailPartnersProps): React.ReactElement {
  return (
    <section className="border-t border-light-border py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold">Also Available At</h2>
          <p className="mt-1 font-arabic text-base text-slate" dir="rtl">
            أيضاً متوفر في
          </p>
        </div>

        {/* Desktop: Grid */}
        <div className="mt-10 hidden flex-wrap items-center justify-center gap-8 md:flex">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                width={100}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Scrolling ticker */}
        <div className="mt-10 overflow-hidden md:hidden">
          <div className="animate-ticker flex items-center whitespace-nowrap">
            {/* Duplicate for seamless loop */}
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-8" aria-hidden={i === 1}>
                {partners.map((partner) => (
                  <div key={`${i}-${partner.name}`} className="partner-logo shrink-0 px-2">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={80}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
