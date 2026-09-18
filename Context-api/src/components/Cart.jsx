import { useContext } from "react";
import { StoreContext } from "../contextApi/StoreContext";




const Cart = () => {

  const {cartItems, setCartItems} =  useContext(StoreContext)

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? ({ ...item, quantity: item.quantity + 1 })
          : (item)
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="mt-1 text-gray-500">
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (

          /* Empty Cart */
          <div className="flex min-h-6 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white">
            <div className="mb-4 text-6xl">
              🛒
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to get started.
            </p>
          </div>

        ) : (

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5"
                >

                  {/* Image */}
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">

                    <div>
                      <h2 className="line-clamp-2 font-semibold text-gray-900">
                        {item.title}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        ${item.price}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">

                      {/* Quantity */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="min-w-10 text-center text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>

                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-medium text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                </div>

              ))}

            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6">

              <h2 className="text-lg font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="my-5 space-y-3">

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-bold text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

              </div>

              {/* Buy */}
              <button
                className="w-full rounded-xl bg-black py-3.5 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
              >
                Buy Now
              </button>

            </div>

          </div>

        )}

      </div>
    </div>
  );
};

export default Cart;