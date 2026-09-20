import { useContext } from "react";
import { StoreContext } from "../contextApi/StoreContext";

const Products = ({products}) => {

  const {setToggle, setCartItems} = useContext(StoreContext)



  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={products.image}
          alt={products.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
          {products.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-900">
          {products.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700">
            ★ {products.rating.rate}
          </span>

          <span className="text-xs text-gray-500">
            ({products.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">

          <span className="text-xl font-bold text-gray-900">
            ${products.price}
          </span>

          <button onClick={() => {
            setCartItems((prev) => {    
              const existing = prev.find((item) => item.id === products.id);
              if (existing) {
                return prev.map((item) =>
                  item.id === products.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
              }
              return [...prev, { ...products, quantity: 1 }];
            })
            setToggle(false)
            ;
          }} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default Products;