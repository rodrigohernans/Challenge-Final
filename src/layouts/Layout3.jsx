import Footer from './footer/Footer'
import NavbarSignIn from './navbarSignIn/NavbarSignIn'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout3 = () => {
  
  return (
    <>
      <NavbarSignIn />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout3