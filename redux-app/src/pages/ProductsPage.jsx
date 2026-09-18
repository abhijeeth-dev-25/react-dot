import ProductCard from "../components/ProductCard"
import { useProduct } from "../hooks/useProduct"
import ProductCardSkeleton from "../components/ProductCardSkeleton"

const ProductsPage = () => {

   const { products, searchProduct, isLoading } = useProduct()
   
   console.log(isLoading)
   

  return (
     <div className="flex flex-col items-center mt-2 pl-30 pr-30 pt-15">
      
        <input onChange={(e)=>(searchProduct(e.target.value))} className="h-10 w-1/4 m-10 bg-white focus:outline-none rounded-full p-5" type="text" placeholder="search..." />
        
        <div className="flex grid grid-cols-4 p-5 gap-5">
           {isLoading ? (
              Array.from({ length: 10 }).map((_, index) => (
                 <ProductCardSkeleton key={index} />
              ))
           ) : (
              products?.map((product) => (
                 <ProductCard key={product.id} product={product} />
              ))
           )}
        </div>
     </div>
  )
}

export default ProductsPage