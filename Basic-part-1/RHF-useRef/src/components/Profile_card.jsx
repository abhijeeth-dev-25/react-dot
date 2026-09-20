import React from 'react'

const Profile_card = ({user, handle_delet,setToggle,setEdit}) => {


  return (
      <aside className="w-64 rounded-xl ml-32 mt-16 bg-white ">

      {/* Profile Image */}
      <figure>
        <img
          className="h-46 w-full rounded-lg object-cover "
          src={user.profile_url}
          alt="User profile"
        />
      </figure>

      {/* User Data */}
      <section className="mt-3 ">
        <h2 className="text-lg font-semibold text-gray-800">
          {user.name}
        </h2>

        <p className="text-sm text-gray-500">
          {user.email}
        </p>

        {/* Actions */}
        <footer className="mt-4 flex gap-2">
          <button
            onClick={()=>{
              setEdit(user)
              setToggle(true)
            }}
            type="button"
            className="flex-1 rounded-md bg-amber-300 px-3 py-1.5 text-sm font-medium hover:bg-amber-400"
          >
            Edit
          </button>

          <button
            onClick={() => {
              handle_delet(user.id)
            }}
            type="button"
            className="flex-1 rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600"
          >
            Delete
          </button>
        </footer>
      </section>

    </aside>
  )
}

export default Profile_card