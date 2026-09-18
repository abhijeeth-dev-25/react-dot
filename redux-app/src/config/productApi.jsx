import axios from "axios";

export const axiosProductApi = axios.create({
    baseURL: "https://dummyjson.com"
})