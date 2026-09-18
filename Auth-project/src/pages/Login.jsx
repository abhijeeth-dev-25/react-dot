import React, { useContext } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { AuthStore } from '../contextApi/AuthContext';



export default function Login() {

    const navigate = useNavigate();

    const { loggedUser, setLoggedUser,signupUsers } = useContext(AuthStore);

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    console.log("hello")

    const handleForm = handleSubmit((data)=>{


       const isUserLogin = signupUsers.find((value) => value.email === data.email && value.password === data.password)

       if(!isUserLogin){
        alert("User not found");
        return;
       }

       if(isUserLogin){
      
        setLoggedUser(data)

        localStorage.setItem("loggedUser", JSON.stringify(data))

        navigate("/main")
       }

    

        reset()
    })




  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form Elements */}
        <form 
        onSubmit={handleForm}
        className="mt-8 space-y-6">
          <div className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <div className="relative text-gray-900">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('email',{
                    required: " email is required",
                    validate:{
                      matchPattern: (value) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address"
                    }
                  })}
                  type="email"
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  placeholder="name@company.com"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
              </div>
              <div className="relative text-gray-900">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('password',{
                    required: " password is required",
                    validate: {
                        atleastSix : (value)=> value.length >= 6 || "password must be atleast 6 characters long"
                    }
                  })}
                  type="password"
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <button 
          onClick={()=>{
            navigate('signup')
          }}
          className="font-semibold text-blue-600 hover:text-blue-500">
            Sign up
          </button>
        </p>

      </div>
    </div>
  );
}
