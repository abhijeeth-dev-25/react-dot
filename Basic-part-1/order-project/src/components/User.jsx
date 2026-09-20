const User = ({ user }) => {
  const fullName = `${user.name.firstname} ${user.name.lastname}`;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-gray-100 px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-bold uppercase text-indigo-600">
            {user.name.firstname[0]}
            {user.name.lastname[0]}
          </div>

          <div className="text-black">
            <h2 className="text-xl font-bold capitalize">
              {fullName}
            </h2>
            <p className="text-sm text-gray-500">
              @{user.username}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs text-gray-400">EMAIL</p>
          <p className="text-sm text-gray-800">{user.email}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">PHONE</p>
          <p className="text-sm text-gray-800">{user.phone}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">ADDRESS</p>
          <p className="text-sm capitalize text-gray-800">
            {user.address.number}, {user.address.street},{" "}
            {user.address.city} {user.address.zipcode}
          </p>
        </div>

        <button className="w-full rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-600">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default User