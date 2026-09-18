import { useAuth } from "../hooks/useAuth";

const SignupPage = () => {

  const { navigate, handleSubmit, register, errors, signupSubmit } = useAuth();





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit(signupSubmit)}
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
              {...register("username", {
                required: "Username is required"
              })}
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />

            {errors.username && (
              <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>)} 
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
              {...register("email", {
                required: "email is required"
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
            {errors.email && (<p className="mt-1 text-xs text-red-500">{errors.email.message}</p>)}
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
                required: "password is required"
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
            {errors.password && (<p className="mt-1 text-xs text-red-500">{errors.password.message}</p>)}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
          >
            Sign Up
          </button>

        </form>

        {/* Login */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={()=>(navigate('/'))}
            className="font-semibold text-black hover:underline"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
