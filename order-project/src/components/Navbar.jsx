import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (

        <div className='h-full'>
            <nav className='bg-gray-200 h-full flex flex-col items-center justify-between p-16'>
                <div className='h-100px w-full  flex  flex-col justfiy-between'>
                    <div className=''>
                        <h1 className=''>Hello!</h1>
                    </div>
                    <ul className='flex gap-10 flex-col justfiy-between'>
                        <li> <NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/items">Items</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                    </ul>
                </div>
                <button>Logout</button>
            </nav>
        </div>
    )
}

export default Navbar