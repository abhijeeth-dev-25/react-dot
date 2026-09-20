import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-black text-white flex justify-around items-center'>
        <div className='ml-4 h-15 w-15 '>
            <img className='h-full w-full object-cover rounded-full' src="https://www.jootoor.com/wp-content/uploads/2025/03/Famous-Logo-Designers.jpg" alt="logo" />
        </div>
        <ul className='flex space-x-5'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className='mr-4'>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar