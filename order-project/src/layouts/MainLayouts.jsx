import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayouts = () => {
  return (
    <div className='grid grid-cols-[15%_85%] h-screen '>
      <Navbar />
      <div className='overflow-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayouts;