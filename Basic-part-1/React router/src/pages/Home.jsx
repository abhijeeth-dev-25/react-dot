import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=>{navigate("/sidebar")}}>Get Started</button>
    <Outlet />
    </>
  )
}

export default Home