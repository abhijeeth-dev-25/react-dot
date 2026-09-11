import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
            <nav className='bg-gray-200 flex flex-col items-center justify-between p-5 '>
                <div className='h-[30%] w-full flex flex-col items-center justify-between'>
                    <div className='bg-gray-700 h-10 w-23 flex items-center justify-center rounded'>
                        <h1 className='text-white'>Hello!</h1>
                    </div>
                    <ul className='flex flex-col gap-y-5'>

                        <li>
                            <NavLink className={({isActive}) => (
                            isActive ? 'border-b-2 border-gray-600' : ''
                        )} to="/home">Home</NavLink>
                        </li>

                        <li>
                            <NavLink className={({isActive}) => (
                            isActive ? 'border-b-2 border-gray-600' : ''
                        )} to="/users">Users</NavLink>
                        </li>

                        <li>
                            <NavLink className={({isActive}) => (
                            isActive ? 'border-b-2 border-gray-600' : ''
                        )} to="/items">Items</NavLink>
                        </li>

                        <li>
                            <NavLink className={({isActive}) => (
                            isActive ? 'border-b-2 border-gray-600' : ''
                        )}to="/cart">Cart</NavLink>
                        </li>

                    </ul>
                </div>
                <button className='h-10 w-23 bg-black text-white rounded '>Logout</button>
            </nav>
    )
}

export default Navbar