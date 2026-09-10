import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { AuthProviderStore } from "../contextApi/authStore";


const LoginPage = () => {
  const navigate = useNavigate();

  const { isUserLoggedIn, setIsUserLoggedIn, signupUsers } = useContext(AuthProviderStore)

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              { ...register('email', {
                required: "Email is required"
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>

            <input
              { ...register('password',{
                required: "Password is required"
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("signup")}
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

