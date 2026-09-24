
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'

const MainProtected = () => {

  const { user, isLoading } = useSelector((store) => store.auth)

  if(isLoading){
    return <p className="flex items-center text-6xl text-red-800 justify-center h-screen">loading...</p>
  }

  if(!user){
     return <Navigate to={'/'} />
  }



  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainProtected