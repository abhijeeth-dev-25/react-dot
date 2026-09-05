import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    
    <nav className='bg-white h-14 mx-2 mt-1 flex justify-around items-center '>
        <div className='h-10 w-10 rounded-full bg-black '>

        </div>
        <ul className='flex space-x-6'>
            <li><NavLink to={"home"}>Home</NavLink></li>
            <li><NavLink to={"contact"}>Contact</NavLink></li>
            <li><NavLink to={"about"}>About</NavLink></li>
        </ul>
        <button>
            login
        </button>
    </nav>
  )
}

export default Navbar