import { createBrowserRouter, RouterProvider } from "react-router"; 
import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../app/layout/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import SignupPage from "../features/auth/ui/pages/SignupPage";
import MainLayout from "../app/layout/MainLayout";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shared/ui/pages/HomePage";
import AboutPage from "../shared/ui/pages/AboutPage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrdersPage from "../features/orders/ui/pages/OrdersPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetailsApi } from "../features/auth/api/authApi"
import { addUser } from "../features/auth/state/authSlice";
import { hyderateUserAction } from "../features/auth/state/authAction";



const AppRoutes = () => {

    const dispatch = useDispatch()

    useEffect( ()=>{
        ( () => {
            try {
                
                dispatch(hyderateUserAction())

            } catch (error) {
                 console.log("error from useEffects in approues",error)
            }
        })()
    },[])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicProtected />,
            children: [
                {
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
            element: <MainProtected />,
            children: [
                {
                    path: '',
                    element:<MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <HomePage />
                        },
                        {
                            path: 'about',
                            element: <AboutPage />
                        },
                        {
                            path: 'products',
                            element: <ProductPage />
                        },
                        {
                            path: 'cart',
                            element: <CartPage />
                        },
                        {
                            path: 'orders',
                            element: <OrdersPage />
                        }
                    ]
                }
            ]
        }
    ])
   
    return <RouterProvider router={router} />
}

export default AppRoutes