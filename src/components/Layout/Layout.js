import React from 'react'
import './Layout.css'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import  Footer  from './Footer/Footer'

const Layout = (props) => {
    
  return (
    <>
    <Navbar />
    <Main />
    <Footer />
    </>
  )
}

export default Layout;