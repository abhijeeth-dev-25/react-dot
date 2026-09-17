import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { useEffect } from "react";
import PublicprotectedRoutes from "./protected/PublicprotectedRoutes";
import MainprotectedRoutes from "./protected/MainprotectedRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicprotectedRoutes />,
        children: [
            {
                path: '',
                element: <AuthLayout />,
                children: [
                    {
                        path: '',
                        element: <LoginPage />
                    },
                    {
                        path: 'signup',
                        element: <SignupPage />
                    }
                ]
            }
        ]
    },
    {
        path: '/main',
        element: <MainprotectedRoutes />,
        children: [
            {
                path: '',
                element: <MainLayout />,
                children: [
                    {
                        path: '',
                        element: <HomePage />
                    }
                ]
            }
        ]
    }

])


export const AppRoutes = () => {

    const dispatch = useDispatch()


    const hydrateUser = () => {
       const user =  JSON.parse(localStorage.getItem('loggedUser'))

       if(user){
           dispatch(setUser(user))
       }else{
        alert("Please login")
       }
    }

    useEffect(()=>{
        hydrateUser()
    },[])


    return (
        <RouterProvider router={router} />
    )
}