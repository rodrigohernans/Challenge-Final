import Footer from './footer/Footer'
import NavbarStore from './navbarStore/NavbarStore'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout2 = () => {
  
  return (
    <>
      <NavbarStore />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout2