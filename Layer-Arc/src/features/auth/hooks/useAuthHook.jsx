import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handelLogin = async (data) => {
        try {
            
            dispatch(loginUserAction(data))
            reset()
        } catch (error) {
            console.log("error from handelLogin", error)
        }
    }

    const handleSignup = (data) => {
        console.log("handleSignup",data)
        reset()
    }


    return {
        navigate,
        register,
        handleSubmit,
        errors,
        handelLogin,
        handleSignup
    }
}