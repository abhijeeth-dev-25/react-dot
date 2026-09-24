import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk('/auth/login', async(credentials, thunkAPI) => {
    try {

        const loginApi = await api.post('/auth/login', credentials);
                
                console.log(loginApi)
        
                localStorage.setItem("token", loginApi.data.accessToken)
        
                return loginApi.data
        
    } catch (error) {

        return thunkAPI.rejectWithValue("Login Failed")
        
    }
})

export const hyderateUserAction = createAsyncThunk('auth/hyderate', async(_,thunkAPI) => {
   const token = localStorage.getItem('token');

   try {
     const userApi = await api.get('/auth/me', {
             headers: {
                    'Authorization': `Bearer ${token}`
            } });
        
        console.log(userApi)

        return userApi.data

   } catch (error) {
     thunkAPI.rejectWithValue("Failed to hyderate")
   }

})

