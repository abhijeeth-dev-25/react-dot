import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router"

const MainprotectedRoutes = () => {

    const { user } = useSelector((store) => store.auth)
    
   if(!user){
    return <Navigate to="/" replace />
   }


  return (
    <Outlet />
  )
}

export default MainprotectedRoutes