import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthProviderStore } from '../contextApi/authStore'


const PrivateRoutes = () => {
  const { isUserLoggedIn } = useContext(AuthProviderStore);

  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoutes 