
const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="flex h-55 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Brand */}
        <p className="text-sm font-medium text-gray-500">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            ★ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            {product.stock} in stock
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm font-medium text-green-600">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Button */}
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

