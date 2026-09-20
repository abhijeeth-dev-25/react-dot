import React, { use, useState } from 'react'

import RHF_profile from './components/RHF_profile'
import Navbar from './components/Navbar'
import Profile_card from './components/Profile_card'

const App = () => {

  const [toggle, setToggle] = useState(true)

  const [users, setUsers] = useState(()=>{
    return  localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  });

  const [edit, setEdit] = useState(null)

  const handle_delet = (id) => {
    let data = users.filter((_, i) => i !== id)
     
    setUsers(data)
    localStorage.setItem('users', JSON.stringify(data));
  }

  console.log(users);

  return (
    <div>
      <Navbar setToggle={setToggle}/>
      
      {toggle ? (<RHF_profile setToggle={setToggle} setUsers={setUsers} users={users} edit={edit} />):(
        <div className="flex  gap-4 p-4">
          {users.map((user) => (<Profile_card user={user} key={user.id}  handle_delet={handle_delet} setToggle={setToggle} setEdit={setEdit}/>))}
        </div>
      )}
    </div>
  )
}

export default App