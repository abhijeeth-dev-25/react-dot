

const Product = ({ product }) => {


  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-72 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
          {product.category}
        </span>

        <h2 className="mt-3 line-clamp-2 min-h-14 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold">{product.rating.rate}</span>
          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-extrabold">
            ${product.price.toFixed(2)}
          </span>

          <button className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;