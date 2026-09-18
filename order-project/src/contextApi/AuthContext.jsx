
import { useState } from 'react';
import { AuthProviderStore } from './authStore';

export const AuthContext = ({ children }) => {
  const [signupUsers, setSignupUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(JSON.parse(localStorage.getItem("isUserLoggedIn")) || null);

  console.log(signupUsers);
  console.log(isUserLoggedIn);

  return (
    <AuthProviderStore.Provider value={{ signupUsers, setSignupUsers, isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </AuthProviderStore.Provider>
  );
};


