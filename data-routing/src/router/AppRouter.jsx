import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import Mainlayouts from '../layouts/Mainlayouts'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Mainlayouts />,
            children: [
                {
                    path: "home",
                    element: <HomePage />
                },{
                    path: "contact",
                    element: <ContactPage />
                },{
                    path: "about",
                    element: <AboutPage />
                }
            ]
          
        },
        {
            path:"/login",
            element:<LoginPage />
        },
        {
            path:"/signup",
            element:<SignupPage />
        }
    ])
    
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter