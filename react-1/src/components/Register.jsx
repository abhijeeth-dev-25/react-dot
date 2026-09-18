import React, { use, useState } from 'react'

const Register = ({ setToggle,setUsers }) => {


  const [data, setData] = useState({})



  const handleData = (e) => {
    const {name, value} = e.target
    setData({...data, [name]:value})
  }


  const handelSubmit = (e) => {
    e.preventDefault()

    setUsers((prev)=>{
        return [...prev, data]
    })

    setData({ name: "", email: "", password: "" })
  }


  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-xl shadow-lg w-96">

            <h2 className="text-2xl font-bold text-center mb-6">
              Register
            </h2>

            <input
              onChange={handleData}
              name='name'
              value={data.name}
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              onChange={handleData}
              name='email'
              value={data.email}
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              onChange={handleData}
              name='password'
              value={data.password}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
              Register
            </button>

            <p className="text-center mt-4">Already have an account? <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => setToggle((prev) => !prev)}>Register here</span></p>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Register