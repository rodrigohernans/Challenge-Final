import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout 