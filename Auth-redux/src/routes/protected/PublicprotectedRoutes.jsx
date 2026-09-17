import { useSelector } from "react-redux"
import { Outlet, useNavigate, Navigate } from "react-router"


const PublicprotectedRoutes = () => {

    const user = useSelector((store)=>(store.auth))
    const navigator = useNavigate()

     if(user.user){ 
       return <Navigate to="/main" replace />
    }



  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PublicprotectedRoutes