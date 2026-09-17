import { useSelector } from "react-redux"
import { Outlet, useNavigate, Navigate } from "react-router"

const MainprotectedRoutes = () => {

    const { user } = useSelector((store) => store.auth)
    const navigator = useNavigate()
    
   if(!user){
    return <Navigate to="/" replace />
   }


  return (
    <Outlet />
  )
}

export default MainprotectedRoutes