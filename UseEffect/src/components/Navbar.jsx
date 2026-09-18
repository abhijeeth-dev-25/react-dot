import React from 'react'

const Navbar = ({setToggle}) => {
    return (
        <nav className='h-10 w-full mt-5 rounded-2xl'>
            <ul className='flex items-center justify-center gap-5'>
                <li onClick={()=>{
                    setToggle(true)
                }}
                 className='cursor-pointer  hover:text-xl bg-amber-300 rounded-2xl h-9 w-19 flex items-center justify-center mt-2'>Login</li>
                <li onClick={()=>{
                    setToggle(false)
                }}
                className='cursor-pointer hover:text-xl bg-amber-300 rounded-2xl h-9 w-19 flex items-center justify-center mt-2'>Signup</li>
            </ul>
        </nav>
    )
}

export default Navbar