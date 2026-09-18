
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='bg-black min-h-screen'>
       <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout