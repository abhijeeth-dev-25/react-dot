import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'

const ItemsPage = () => {

  const [productData, setProductData] = useState([])

  const data = async () => {

    try{
      const res = await axios.get('https://fakestoreapi.com/products')
      console.log(res.data)
      setProductData(res.data)

    }catch(err){
         console.log(err)
    }
  }

  useEffect(()=>{
    data()
  },[])

  return (
    <div className='grid grid-cols-4 gap-6 p-3'>
      {
        productData.map((product)=>{
          return <Product key={product.id} product={product} />
        })
      }

    </div>
  )
}

export default ItemsPage