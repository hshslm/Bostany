const tickerItems = [
  "Free delivery on orders over EGP 300",
  "Cash on delivery available",
  "Secure online payment",
  "Delivery in 2-4 business days",
];

const tickerText = tickerItems.join("  ·  ");

export function AnnouncementTicker(): React.ReactElement {
  return (
    <div className="overflow-hidden bg-heritage-gold/10 py-3">
      <div className="animate-ticker flex whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="mx-8 inline-block text-sm font-medium text-heritage-gold"
            aria-hidden={i === 1}
          >
            {tickerText}  ·  {tickerText}
          </span>
        ))}
      </div>
    </div>
  );
}
