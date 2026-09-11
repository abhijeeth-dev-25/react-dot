
import { createBrowserRouter, RouterProvider } from 'react-router';
import PublicRoutes from './PublicRoutes';
import AuthLayouts from '../layouts/AuthLayouts';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import PrivateRoutes from './PrivateRoutes';
import UsersPage from '../pages/UsersPage';
import ItemsPage from '../pages/ItemsPage';
import CartPage from '../pages/CartPage';
import MainLayouts from '../layouts/MainLayouts';

const router = createBrowserRouter([
  { 
    // Public Routes Guard (Pathless Layout Route)
    element: <PublicRoutes />, 
    children: [
      {
        element: <AuthLayouts />,
        children: [
          {
            path: "/",
            element: <LoginPage />
          },
          {
            path: "signup",
            element: <SignupPage />
          }
        ]
      }
    ]
  },
  { 
    // Protected / Private Routes Guard (Pathless Layout Route)
    element: <PrivateRoutes />,
    children: [
      {
        element:<MainLayouts />,
        children: [
          {
            path: "home", 
            element:<HomePage />
          },
          {
            path: "users",
            element:<UsersPage />
          },
          {
            path: "items",
            element:<ItemsPage />
          },
          {
            path: "cart",
            element:<CartPage />
          }
        ]
      }
    ]
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;