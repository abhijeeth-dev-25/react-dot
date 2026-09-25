import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductsCard'

const App = () => {


  const [products, setProducts] = useState([])

  const [page, setPage] = useState(0)

  const limit = 10

  const totalPages = Math.ceil(products?.total / limit)
  



  const getAllProducts = async() => {
    try {

      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)

      console.log(res.data)

      setProducts(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  

  useEffect(()=>{
    getAllProducts();
  },[page])





  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex grid grid-cols-4 gap-5 p-15'>

      {
        products?.products?.map((data) => {
          return <ProductCard key={data.id} product={data} />
        })
      }

    </div>
    <div className='flex items-center gap-10 mb-15'>
      <button 
      disabled={page === 1}
      onClick={() => (setPage(page - 1))} className='h-10 w-30 bg-black text-white rounded-full'>Prev</button>
      <h1 className='font-bold'>page {page + 1} of {totalPages}</h1>
      <button 
      disabled={page === 20}
      onClick={() => (setPage(page + 1))} className='h-10 w-30 bg-black text-white rounded-full'>Next</button>
    </div>
    </div>
  )
}

export default App 