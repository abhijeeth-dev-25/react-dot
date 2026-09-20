import React, { useContext, useEffect, useState } from 'react'
import { MyInfoContext } from '../ContextApi/MyInfo'

const Signup = () => {

    const {username, setUsername, email, setEmail, password, setPassword} = useContext(MyInfoContext)

    useEffect(() => {
        console.log("Name")
    },[username])

    console.log("Email")
    console.log("password")


    return (
        <div className='h-screen w-full rounded-2xl flex flex-col items-center justify-center'>
            <label htmlFor="username" className='-ml-67.5'>Username:</label>
            <input onChange={(e)=>{
                setUsername(e.target.value)
            }}
            type="text" placeholder='username' className='h-10 w-90 rounded-2xl pl-2 border-2 border-orange-200 outline-none' />
            <label htmlFor="email" className='-ml-75'>Email:</label>
            <input onChange={(e)=>{
               setEmail(e.target.value)
            }}
            type="email" placeholder='email' className='h-10 w-90 rounded-2xl pl-2 border-2 border-orange-200 outline-none' />
            <label htmlFor="password" className='-ml-67.5'>Password:</label>
            <input onChange={(e)=>{
                setPassword(e.target.value)
            }}
            type="password" placeholder='********' className='h-10 w-90 rounded-2xl pl-2 border-2 border-orange-200 outline-none' />
            <button className='bg-amber-200 h-10 w-90 mt-5 rounded-2xl cursor-pointer'>Login</button>
        </div>
    )
}

export default Signup