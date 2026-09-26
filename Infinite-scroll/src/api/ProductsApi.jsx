import axios from "axios"

export const getAllProducts = async(limit , pageParam = 0) => {

    
    try {

        console.log("pageParam", pageParam);


        const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`);


        console.log(res.data)

        return res.data
    } catch (error) {
        console.log("Error while fetching products", error)
    }
}