import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {

    const [users, setUsers] = useState([])

    console.log(users)

    const [toggle, setToggle] = useState(false)

  
  return (
    <div className="main">

        {toggle ? <Login setToggle={setToggle} setUsers={setUsers}/> : <Register setToggle={setToggle} setUsers={setUsers}/>}

    </div>
  )
}

export default App