import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
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
    },
    {
        path: '/main',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            }
        ]
    }

])


export const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}