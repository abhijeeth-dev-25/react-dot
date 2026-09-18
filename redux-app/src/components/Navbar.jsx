import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {

    const { handleLogout} = useAuth()

    const { user } = useSelector((store) => store.auth)

    console.log(user.email)

    return (
        <div className='text-white flex justify-around p-5'>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl text-white'>Stok</h1>
                <h1 className='font-bold text-xl text-yellow-500'>Mac</h1>
            </div>
            <ul className='flex gap-5 items-center'>
                <li><NavLink className={({isActive})=>(isActive ? ' text-yellow-500 border-b-2 pb-2 ' : '')} to="/main" end>Home</NavLink></li>
                <li><NavLink className={({isActive})=>(isActive ? ' text-yellow-500 border-b-2 pb-2 ' : '')} to="/main/products">Products</NavLink></li>
                <li><NavLink className={({isActive})=>(isActive ? ' text-yellow-500 border-b-2 pb-2 ' : '')} to="/main/about" >About</NavLink></li>
            </ul>
            <div className='text-white flex gap-10 items-center'>
                <h2 className='font-semibold text-yellow-500'>Hi, <span className='text-white'>Welcome</span></h2>
                <button 
                onClick={handleLogout}
                className='bg-yellow-500 px-4 py-2 rounded'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar