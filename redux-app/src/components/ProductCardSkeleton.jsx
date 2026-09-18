const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Image Skeleton */}
      <div className="h-56 w-full animate-pulse bg-gray-200" />

      {/* Content */}
      <div className="p-5 animate-pulse">

        {/* Brand */}
        <div className="h-4 w-20 rounded bg-gray-200" />

        {/* Title */}
        <div className="mt-2 h-5 w-4/5 rounded bg-gray-200" />
        <div className="mt-2 h-5 w-3/5 rounded bg-gray-200" />

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-6 w-12 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-6 w-16 rounded bg-gray-200" />
          <div className="h-4 w-16 rounded bg-gray-200" />
        </div>

        {/* Button */}
        <div className="mt-4 h-11 w-full rounded-lg bg-gray-200" />

      </div>
    </div>
  );
};

export default ProductCardSkeleton;
