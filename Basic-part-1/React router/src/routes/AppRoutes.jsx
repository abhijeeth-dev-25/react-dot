import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Sidebar from '../pages/Sidebar'


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} >
                <Route path='sidebar' element={<Sidebar />}/>

            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default AppRoutes