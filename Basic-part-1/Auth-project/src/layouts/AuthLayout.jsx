import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { AuthStore } from '../contextApi/AuthContext';
import {Navigate} from 'react-router';

const AuthLayout = () => {


  const { loggedUser } = useContext(AuthStore);
  
   if(loggedUser){
    console.log("welcome")
    return <Navigate to={"/main"} />    
   }



  return (  
    <>
    <Outlet />
    </>
  )
}

export default AuthLayout