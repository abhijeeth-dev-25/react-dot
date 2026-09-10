import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AuthProviderStore } from '../contextApi/authStore';

const AuthLayouts = () => {
  const { isUserLoggedIn } = useContext(AuthProviderStore);

  return isUserLoggedIn ? (
    <Navigate to="/home" replace />
  ) : (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayouts;