import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthProviderStore } from '../contextApi/authStore';

const AuthHook = () => {
    const navigate = useNavigate();
    const { signupUsers, setSignupUsers, setIsUserLoggedIn } = useContext(AuthProviderStore);
  

    const { register, reset, handleSubmit, formState:{errors} } = useForm();
    
      const handleLogin = (data) => {
        console.log(data);
    
         const foundUser = signupUsers.find((user) => {
          return user.email === data.email && user.password === data.password 
         })
    
         if(foundUser){
          setIsUserLoggedIn(foundUser);
          localStorage.setItem("isUserLoggedIn", JSON.stringify(foundUser));
          navigate('/home', { replace: true });
         }else{
          alert("user not found");
         }
    
    
        reset();
      }
    

      const handelSignup = (data) => {
            const users = [...signupUsers, data];

            setSignupUsers(users);
            setIsUserLoggedIn(data);

            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("isUserLoggedIn", JSON.stringify(data));

                navigate('/home', { replace: true });
    
            reset();
            
      }

    return {
        register,
        reset,
        handleSubmit,
        errors,
        handleLogin,
        handelSignup
    }

}

export default AuthHook