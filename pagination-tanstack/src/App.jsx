import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllProducts } from './apis/productsApi'
import ProductCard from './components/ProductCard'
import { useState } from 'react'

const App = () => {


  const [page, setPage] = useState(0)

  const limit = 10;

  


   const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getAllProducts(page, limit),
    placeholderData : keepPreviousData
   })

   const totalPages = Math.ceil(data?.total / limit)

   

   console.log(data)


  return (
    <div className='flex flex-col items-center'>
      <div 
      style={{ opacity: isPlaceholderData ? 0.3 : 1}}
      className='flex grid grid-cols-4 p-15 gap-5'>
      {
        data?.products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
      }
    </div>
    <div className='flex items-center gap-10 mb-15'>
      <button
       disabled={page === 0}
       onClick={() => setPage(page - 1)}
       className='h-10 w-30 bg-black rounded-full text-white'>Prev</button>
      <h1 className='font-bold'>{page+1}</h1>
      <button 
      disabled={page === totalPages - 1}
      onClick={() => setPage(page + 1)}
      className='h-10 w-30 bg-black rounded-full text-white'>Next</button>
    </div>
    </div>
  )
}

export default App