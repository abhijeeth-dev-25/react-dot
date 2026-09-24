import { api } from "../../../config/api"


export const loginUserApi = async (credentials) => {
    try {
        const loginApi = await api.post('/auth/login', credentials);
        
        console.log(loginApi)

        localStorage.setItem("token", loginApi.data.accessToken)

        return loginApi.data
        
    } catch (error) {
        console.log("Error from loginApi:"), error
    }
}

export const userDetailsApi = async () => {

    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const userApi = await api.get('/auth/me', {
             headers: {
                    'Authorization': `Bearer ${token}`
            } });
        
        console.log(userApi)

        return userApi.data
        
    } catch (error) {
        console.log("Error from loginApi:"), error
    }
}