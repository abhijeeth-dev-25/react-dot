import React from 'react'
import { Outlet } from 'react-router'

const publicRoutes = () => {

  
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default publicRoutes