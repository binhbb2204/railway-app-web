import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from '../Page/Home'
import Buy_Ticket from '../Page/Buy_Ticket'
import Check_Ticket from '../Page/Check_Ticket'
import Return_Ticket from '../Page/Return_Ticket'
import About from '../Page/About'
import Login from '../Page/Login'
import Register from '../Page/Register'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/buy-ticket' element={<Buy_Ticket />} />
        <Route path='/check-ticket' element={<Check_Ticket />} />
        <Route path='/return-ticket' element={<Return_Ticket />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Routers