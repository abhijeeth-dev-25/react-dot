import React, { useEffect, useState } from 'react'
import User from '../components/User'
import { axiosInstance } from '../config/AuthConfig'

const UsersPage = () => {

  const [userData, setUserData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const data = async () => {
    try {

      const res = await axiosInstance.get('/users')
      setUserData(res.data)
      setIsLoading(false)

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {
    data()
  }, [])

  if (isLoading) {
    return <h1 className='text-8xl p-10 font-bold flex items-center justify-center h-full'> loading....</h1>
  }


  return (
    <div className='p-3 grid grid-cols-4 gap-6'>
      {userData.map((user) => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}

export default UsersPage