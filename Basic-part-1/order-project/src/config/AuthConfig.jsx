import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

axiosInstance.interceptors.response.use(
    (res)=>{
        return res
    },
    (error)=>{

        console.log('error', error.response.data)

        return error
    }
)