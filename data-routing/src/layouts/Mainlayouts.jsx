import React from 'react'
import AppRouter from '../router/AppRouter'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Mainlayouts = () => {
  return (
    <>
      <Navbar />
      <div className='mt-10 ml-56'>
        <Outlet />
      </div>
    </>
  )
}

export default Mainlayouts