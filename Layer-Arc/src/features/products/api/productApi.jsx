import { api } from "../../../config/api";


export const getAllProductsApi = async(search) => {
    try {
        const res = await api.get(`/products/search?q=${search}`)

        console.log('products',res.data)

        return res.data

    } catch (error) {
        console.log("error from productApi",error)
    }
}

export const getAllCategories = async() => {
    try {
        const res = await api.get('/products/categories')

        return res.data
    } catch (error) {
        console.log("error from getAllCategories",error)
    }
}

export const getProductsByCategory = async(category) => {
    try {
        const res = await api.get(`/products/category/${category}`)

        console.log("hello", res.data)

        return res.data
    } catch (error) {
        console.log("error from getProductsByCategory", error)
    }
}




