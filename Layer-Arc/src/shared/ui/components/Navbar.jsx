import { NavLink } from 'react-router'
import { ShoppingBag, Package } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='h-10 w-full bg-black text-white flex items-center justify-between px-25 py-7 '>
        <div className='text-xl font-bold tracking-widest'>
            logo
        </div>
        <div className='flex gap-15'>
            <NavLink className={({isActive}) => isActive ? "border-b-2 border-white px-0.5" : "text-white"} end to={'/main'}> Home </NavLink>
            <NavLink className={({isActive}) => isActive ? "border-b-2 border-white px-0.5" : "text-white"} to={'/main/products'}> Products </NavLink>
            <NavLink className={({isActive}) => isActive ? "border-b-2 border-white px-0.5" : "text-white"} to={'/main/about'}> About </NavLink>
        </div>
        <div className='flex items-center justify-center gap-6'>
            <NavLink to={'/main/orders'}><Package /></NavLink>
            <NavLink to={'/main/cart'}><ShoppingBag /></NavLink> 
            <button className='h-9 w-19 bg-white text-black rounded-lg cursor-pointer font-bold'>
                Logout
            </button>
        </div>
    </div>
  )
}

export default Navbar