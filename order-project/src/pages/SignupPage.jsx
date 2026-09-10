import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { AuthProviderStore } from '../contextApi/authStore';

const SignupPage = () => {


  const navigate = useNavigate();

  const { signupUsers, setSignupUsers, setIsUserLoggedIn } = useContext(AuthProviderStore);

  const { register, reset, handleSubmit, formState: {errors}} = useForm();

  const handelSignup = (data) => {
    const users = [...signupUsers, data];
    setSignupUsers(users);
    setIsUserLoggedIn(data);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isUserLoggedIn", JSON.stringify(data));

    navigate('/home', { replace: true });
    
    reset();
  }




  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit(handelSignup)}
        className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              { ...register('username',{
                required: "Username is required"
              })}
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              { ...register('email',{
                required: "Email is required"
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
             { ...register('password', {
              required: "Password is required"
             })}
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button 
            onClick={()=>{
              navigate("/")
            }}
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
