import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Homepage from '../pages/Homepage'
import Contactpage from '../pages/Contactpage'
import AuthLayout from '../layouts/AuthLayout'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "signup",
                    element: <Signup />
                }
            ]
        }

    ])



  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes