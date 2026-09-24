
import { useCategories } from "../../hooks/useProductsHook";


const ProductFilter = ({category, setCategory,search, setSearch}) => {

  const { data, isLoading, error} = useCategories()
    
  return (
    <div className="flex w-full items-center justify-between gap-5 rounded-full bg-white p-4 shadow-sm">

      {/* Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>(setSearch(e.target.value))}
          className="h-11 w-full rounded-full border border-black  bg-white px-4 text-sm outline-none transition focus:border-black focus:bg-white"
        />
      </div>

      {/* Category */}
      <div className="w-56">
        <select
          value={category}
          onChange={(e) => (setCategory(e.target.value))}
          className="h-11 w-full rounded-full border border-black-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-black focus:bg-white"
        >
          <option value="">All Categories</option>
          {
            data?.map((category) => {
              return <option key={category.slug} value={category.slug} > { category.name } </option>
            })
          }

          
        </select>
      </div>

    </div>
  );
};

export default ProductFilter;
