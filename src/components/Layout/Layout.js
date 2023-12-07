import React from 'react'
import './Layout.css'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import  Footer  from './Footer/Footer'

const Layout = (props) => {
    
  return (
    <>
    <Navbar />
    <Main title={props.title} background = {props.background} backdrop = {props.backdrop}>
      {props.children}
    </Main>
    <Footer />
    </>
  )
}

export default Layout;