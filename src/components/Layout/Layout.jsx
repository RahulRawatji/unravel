import React from 'react'
import Navbar from './Navbar/Navbar'

const Layout = ({rooms, children}) => {
  return (
    <>
    {rooms.length > 0 ? <Navbar/> : null}
    {children}
    </>
  )
}

export default Layout