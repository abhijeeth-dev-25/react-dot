import React, { useEffect, useState } from 'react'

import Product from '../components/Product'
import { axiosInstance } from '../config/AuthConfig'

const ItemsPage = () => {

  const [productData, setProductData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const data = async () => {

    try {
      const res = await axiosInstance.get('/products')
      setProductData(res.data)
      setIsLoading(false)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    data()
  }, [])


  if (isLoading) {
    return <h1 className='text-8xl p-10 font-bold flex items-center justify-center h-full'> loading....</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-6 p-3'>
      {
        productData.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }

    </div>
  )
}

export default ItemsPage