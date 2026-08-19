import { useContext } from "react";
import { StoreContext } from "../contextApi/StoreContext";

const Navbar = () => {

  const {setToggle} = useContext(StoreContext);




  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white font-bold">
            D
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Decrot
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          {/* Products */}
          <button onClick={()=>{
            setToggle(true)
          }}
           className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black">
            Products
          </button>

          {/* Cart */}
          <button onClick={()=>{
            setToggle(false)
          }} className="relative rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black">
            Cart

            {/* Cart count */}
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-semibold text-white">
              3
            </span>
          </button>

          {/* Add Item */}
          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            + Add Item
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;