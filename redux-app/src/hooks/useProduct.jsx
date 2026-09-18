import { useState } from "react"
import { axiosProductApi } from "../config/productApi"
import { useEffect } from "react"


export const useProduct = () => {

    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(true)



    const productData = async () => {
        try {
             const { data } = await axiosProductApi.get('/products')

             console.log("data->",data.products)

            setProducts(data.products)
            setIsLoading(false)
        } catch (error) {
            console.log("Error ->",error)
        }

    }

    useEffect(()=>{
        productData()
    },[])

    const searchProduct = async (search) => {

     try {
        if (!search.trim()) {
            productData()
            return
        }
        const { data } = await axiosProductApi.get('/products/search', {
            params: { q: search }
        })
        setProducts(data.products)
        setIsLoading(false)
    } catch (error) {
        console.error("Search error:", error)
    }
    }


  return {

    products,
    searchProduct,
    isLoading

  }
}

