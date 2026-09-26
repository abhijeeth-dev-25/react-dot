import axios from "axios"

export const getAllProducts = async(page, limit) => {
    try {
        const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)

        return res.data
        
    } catch (error) {
         console.log(error)
    }
}