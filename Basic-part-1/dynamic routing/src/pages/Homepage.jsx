
import { useEffect, useState } from 'react'
import ProductsCard from '../components/ProductsCard'
import axios from 'axios'

const Homepage = () => {

    const [product, setProduct] = useState([])

    const getData = async() => {
        const data = await axios.get("https://fakestoreapi.com/products")
        setProduct(data.data)
    }

    useEffect(()=>{
      getData()  
    }, [])

    console.log(product)

  return (
    <div className='grid grid-cols-4 place-items-center gap-4 p-4'>
        {product && product.map((item) => (
            <ProductsCard key={item.id} product={item} />
        ))}
    </div>
  )
}

export default Homepage