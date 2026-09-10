
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

const router = createBrowserRouter([
  {
        path: "/",
        element: <AuthLayouts />,
        children: [
          {
            path: "",
            element: <LoginPage />
          },
          {
            path: "signup",
            element: <SignupPage />
          }
        ]
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "users",
        element: <UsersPage />
      },
      {
        path: "items",
        element: <ItemsPage />
      },
      {
        path: "cart",
        element: <CartPage />
      }
    ]
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;