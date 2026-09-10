import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthProviderStore } from '../contextApi/authStore'
import Navbar from '../components/Navbar';

const PrivateRoutes = () => {
  const { isUserLoggedIn } = useContext(AuthProviderStore);

  return isUserLoggedIn ? (
    <div className="grid min-h-screen grid-cols-[220px_1fr]">
      <aside className="h-full">
        <Navbar />
      </aside>
      <main className="h-full overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoutes 