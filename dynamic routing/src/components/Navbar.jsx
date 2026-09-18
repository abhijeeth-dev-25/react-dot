import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='h-15 w-full bg-black flex text-white justify-around items-center'>
        <div className='h-10 w-10 bg-white rounded-full'>
            
        </div>
        <ul className='flex space-x-6'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
        <button className='h-8 w-19 bg-white text-black rounded-full font-bold text-sm'>Login</button>
    </nav>
  )
}

export default Navbar