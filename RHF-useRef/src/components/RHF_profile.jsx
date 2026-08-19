import React from 'react'
import {useForm} from 'react-hook-form';
import { nanoid } from 'nanoid'

const RHF_profile = ({setToggle, setUsers,users, edit}) => {

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode: "onChange", defaultValues: edit});

    const handle_form = (data) => {
      const updated = edit
        ? users.map((val) => val.id === edit.id ? { ...data, id: edit.id } : val)
        : [...users, { ...data, id: nanoid() }];

      setUsers(updated);
      localStorage.setItem('users', JSON.stringify(updated));
      setToggle((prev) => !prev);
      reset();
    }



  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
  <section className="w-full max-w-md px-4">
    <form
      onSubmit={handleSubmit(handle_form)}
      className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md"
    >
      <header className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Create Profile
        </h1>
      </header>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>

        <input
          id="name"
          {...register('name', {
            required: "name is required",
            minLength: {
              value: 4, message: "name is too short"
            },
            maxLength: {
              value: 20, message: "name is too long"
            }
          })}
          className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
          type="text"
          placeholder="user name"
        />

        {errors.name && (
          <p className="text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          id="email"
          {...register('email', {
            required: "email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "invalid email"
            }
          })}
          className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
          type="email"
          placeholder="email"
        />

        {errors.email && (
          <p className="text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          id="password"
          {...register('password', {
            required: "password is required",
            minLength: {
              value: 8, message: "password is too short"
            },
            maxLength: {
              value: 20, message: "password is too long"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "invalid password"
            }
          })}
          className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
          type="password"
          placeholder="password"
        />

        {errors.password && (
          <p className="text-xs text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="profile_url" className="text-sm font-medium text-gray-700">
          Profile URL
        </label>

        <input
          id="profile_url"
          {...register('profile_url', {
            required: "profile url is required",
            pattern: {
              value: /^https?:\/\/[^\s$.?#].[^\s]*$/,
              message: "invalid profile url"
            }
          })}
          className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
          type="url"
          placeholder="profile url"
        />

        {errors.profile_url && (
          <p className="text-xs text-red-500">
            {errors.profile_url.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 rounded-md bg-amber-300 px-4 py-2 font-medium text-gray-800 transition hover:bg-amber-400"
      >
        Create
      </button>
    </form>
  </section>
</main>
  )
}

export default RHF_profile