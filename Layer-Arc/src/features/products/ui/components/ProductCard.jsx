
const ProductCard = ({ product }) => {

    
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Brand + Category */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {product.brand}
          </span>

          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            ★ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            {product.reviews?.length || 0} Reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm font-semibold text-green-600">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Stock */}
        <p className="mt-2 text-sm text-green-600">
          {product.availabilityStatus}
        </p>

        {/* Add to Cart */}
        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;