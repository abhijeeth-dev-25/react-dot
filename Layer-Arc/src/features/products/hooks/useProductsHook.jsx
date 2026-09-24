import { useEffect, useState } from "react"
import { getAllCategories, getAllProductsApi, getProductsByCategory } from "../api/productApi"
import { useQuery } from "@tanstack/react-query"


export const useAllProduct = () => {

    const [search, setSearch] = useState('')
    const [debouncing, setDebouncing] = useState('')

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncing(search)
        },1000)

        return () => clearTimeout(timer)
    },[search])

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', debouncing],
        queryFn: () => getAllProductsApi(debouncing)
    })

    return {
        data,
        isLoading,
        error,
        search,
        setSearch
    }
}

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => getAllCategories()
    })
}


export const useProductsByCategory = () => {

    const [category, setCategory] = useState('')


    const { data, isLoading, error} = useQuery({
        queryKey: ['productsByCategory', category],
        queryFn: () => getProductsByCategory(category)
    })

    return {
        data,
        isLoading,
        error,
        category,
        setCategory
    }
}
    




