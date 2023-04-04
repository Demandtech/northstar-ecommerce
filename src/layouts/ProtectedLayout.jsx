import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

const ProtectedLayout = () => {
  return (
    <div>
       <Navbar />
       <Outlet />
    </div>
  )
}

export default ProtectedLayout