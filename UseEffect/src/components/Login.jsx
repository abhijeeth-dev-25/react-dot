import React from 'react'

const Login = () => {
    return (
        <div className='h-screen w-full rounded-2xl flex flex-col items-center justify-center'>
            <label htmlFor="email" className='-ml-75'>Email:</label>
            <input type="email" placeholder='email' className='h-10 w-90 rounded-2xl pl-2 border-2 border-orange-200 outline-none' />
            <label htmlFor="password" className='-ml-67.5'>Password:</label>
            <input type="password" placeholder='********' className='h-10 w-90 rounded-2xl pl-2 border-2 border-orange-200 outline-none' />
            <button className='bg-amber-200 h-10 w-90 mt-5 rounded-2xl cursor-pointer'>Login</button>
        </div>
    )
}

export default Login