import { getAllProducts } from "./api/ProductsApi"
import { useInfiniteQuery , useQuery} from "@tanstack/react-query"
import ProductCard from "./components/ProductsCard";


const App = () => {

  const limit = 30;

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({pageParam}) => getAllProducts(limit , pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastpage, allpages) => {
      const load = allpages.length * limit;

      if(load < lastpage.total) return load;

      return undefined;
    }
  })

  if(isLoading){
    return <p>Loading......</p>
  }

  const allProducts = data?.pages?.flatMap((val) => val.products) ?? []


  console.log("data",allProducts)
  



  return (
    <div className="flex items-center flex-col mb-10">
      <div className="flex grid grid-cols-4 gap-5 p-10">
      {
        allProducts?.map((val) =>{
          return <ProductCard key={val.id} product={val} />
        })
      }

    </div>
   {hasNextPage &&  <button 
      onClick={() => fetchNextPage()}
      className="h-10 w-45 cursor-pointer bg-black rounded-full text-white ">
        {isFetchingNextPage ? "Loading..." : "Load more..."}
      </button>}
    </div>
  )
}

export default App