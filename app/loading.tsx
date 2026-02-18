export default function Loading(): React.ReactElement {
  return (
    <div className="flex min-h-screen items-center justify-center bg-warm-white">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-bostany-red/10" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-bostany-red">
            <span className="font-display text-2xl font-bold text-white">B</span>
          </div>
        </div>
        {/* Brand name */}
        <p className="text-sm font-medium tracking-widest text-slate">
          BOSTANY
        </p>
        {/* Loading bar */}
        <div className="h-0.5 w-24 overflow-hidden rounded-full bg-light-border">
          <div className="h-full w-1/2 animate-[shimmer_1.2s_ease-in-out_infinite] rounded-full bg-heritage-gold" />
        </div>
      </div>
    </div>
  );
}
