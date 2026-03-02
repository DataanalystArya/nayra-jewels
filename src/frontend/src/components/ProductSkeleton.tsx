export default function ProductSkeleton() {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-luxury">
      <div className="skeleton-shimmer" style={{ paddingBottom: "100%" }} />
      <div className="p-4 space-y-3">
        <div className="skeleton-shimmer h-3 w-20 rounded" />
        <div className="skeleton-shimmer h-5 w-3/4 rounded" />
        <div className="skeleton-shimmer h-4 w-24 rounded" />
        <div className="skeleton-shimmer h-10 w-full rounded" />
      </div>
    </div>
  );
}
