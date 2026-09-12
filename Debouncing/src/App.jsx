import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  const [allProducts, setAllProducts] = useState([])

  const [product, setProduct] = useState([])

  const [search, setSearch] = useState(null)

  const data = async()=>{
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(res.data)
      setProduct(res.data)
    } catch (error) {
      console.log(error)  
    }
  }

  const searchResult = () => {

    if (!search?.trim()) {
      setProduct(allProducts);
      return;
    }

    const result =  allProducts.filter((data)=>{
      return data.title.toLowerCase().includes(search.toLowerCase())
    })

    setProduct(result)
  }
   

  useEffect(()=>{

     console.log("running...")

     const timeout =setTimeout(()=>{
      searchResult()
      console.log("executed")
     },700)
 
    return () => clearTimeout(timeout);

  },[search])



  useEffect(()=>{
     data()
  },[])



  return (
    <div className='p-7'>

      <input 
      onChange={(e)=>{
          setSearch(e.target.value)
      }}
      className='h-10 w-75 bg-gray-200 rounded-full p-4 mb-10'
      type="text" placeholder='Enter product name' />

      <div className='flex flex-col'>
        {product.map((data)=>{

          return <div key={data.id} className="text-black">{data.title}</div>

        })}
      </div>

    </div>
  )
}

export default App