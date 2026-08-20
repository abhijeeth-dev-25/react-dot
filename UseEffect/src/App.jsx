import React, { useState } from 'react'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { MyContextProvider } from './ContextApi/MyInfo'

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      {/* <Comp2 />
      <MyStoreProvider>
        <Comp3 />
        <Comp4 />
      </MyStoreProvider> */}
      <Navbar setToggle={setToggle} />

      {toggle ? (<Login />) : (<MyContextProvider>
        <Signup />
      </MyContextProvider>)}


    </div>
  )
}

export default App