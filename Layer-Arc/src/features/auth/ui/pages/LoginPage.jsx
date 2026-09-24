import { useAuth } from "../../hooks/useAuthHook";


const LoginPage = () => {

  const { navigate, register, handleSubmit, errors, handelLogin } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit(handelLogin)}
        className="space-y-5">
          
          {/* Email */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              {...register("username",{
                required: "username is required"
              })}
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
            {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username.message}</p>}
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
              {...register("password", {
                required: "Password is required",
                minLength: 6,
                message: "Password must be at least 6 characters long"
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
            
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center text-sm text-gray-500"> Don't have an account?{" "} 
          <button onClick={() => navigate('/Signup')}
          className="font-semibold text-black hover:underline" > Sign up </button> 
          </div>

      </div>
    </div>
  );
};

export default LoginPage;