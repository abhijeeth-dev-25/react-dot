import React, { useContext } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router'
import { AuthStore } from '../contextApi/AuthContext'

const ProtectedRoutes = () => {

    const { loggedUser } = useContext(AuthStore)

    

    if(!loggedUser){

        console.log("hero")

        return <Navigate to={"/"} />

    }

  return (
    <>
     
    <Outlet />
    </>
  )
}

export default ProtectedRoutes