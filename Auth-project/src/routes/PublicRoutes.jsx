import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthStore } from '../contextApi/AuthContext'



const PublicRoutes = () => {

    const { loggedUser } = useContext(AuthStore)

    if(loggedUser){
        return <Navigate to={"/main"} />
    }
  return (
    <>
    
    <Outlet />
    </>
  )
}

export default PublicRoutes