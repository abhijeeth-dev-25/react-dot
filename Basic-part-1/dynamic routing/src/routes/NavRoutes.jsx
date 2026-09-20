import React from 'react'
import { Routes, Route } from 'react-router'
import Productspage from '../pages/Productspage'
import Homepage from '../pages/Homepage'
import Aboutpage from '../pages/Aboutpage'


const NavRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Productspage />} />
        <Route path='/about' element={<Aboutpage />} />
      </Routes>
  )
}

export default NavRoutes