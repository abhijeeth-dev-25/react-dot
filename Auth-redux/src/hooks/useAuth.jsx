import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser, removeUser } from "../features/authSlice"

export const useAuth = () => {

   const [users, setUsers] = useState(() => {
     try {
       return JSON.parse(localStorage.getItem('users')) || []
     } catch (e) {
       return []
     }
   })

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { user } = useSelector((store)=>(store.auth))

   const { register, reset, handleSubmit, formState: { errors }} = useForm()

    const loginSubmit = (data) => {

      const res = users.find((user)=>{
          return user.email === data.email && user.password === data.password 
      })

      if(res){
            dispatch(setUser(data))
            localStorage.setItem("loggedUser", JSON.stringify(data))
            navigate('/main')
      }else{
            alert("Please enter correct username and password")
      }

       reset()
    }

    const signupSubmit =(data) => {

      const res = [...users, data]
      
      localStorage.setItem("users", JSON.stringify(res))
      setUsers(res)
      reset()
      console.log("user->", res)
    }

    const handleLogout = () =>{
      localStorage.removeItem('loggedUser')
      dispatch(removeUser())
      navigate('/')
    }
    
    

    return {
       navigate, 
       register,
       handleSubmit,
       loginSubmit,
       signupSubmit,
       errors,
       handleLogout
    }
}

