import React from 'react'

const ProductsCard = ({ product = {} }) => {
  const { title, price, description, category, image, rating } = product

  return (
    <div className="w-80 rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group m-4">
      {/* Product Image & Category Badge */}
      <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider z-10">
          {category}
        </span>
        <img
          className="h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          src={image}
          alt={title}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col grow">
        {/* Title */}
        <h2 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors" title={title}>
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center mt-2 space-x-2">
          <div className="flex items-center text-amber-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="ml-1 text-sm font-semibold text-gray-700">
              {rating?.rate}
            </span>
          </div>
          <span className="text-xs text-gray-400">
            ({rating?.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3 line-clamp-2 grow">
          {description}
        </p>

        {/* Price & Actions */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Price</span>
            <span className="text-xl font-extrabold text-gray-900">
              ${price?.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xl transition-colors">
              Details
            </button>
            <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs font-semibold rounded-xl shadow transition-colors active:scale-95">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard