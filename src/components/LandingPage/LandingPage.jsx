import React from 'react'
import Layout from '../Layout/Layout'
import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <Layout title="Serve Our Delicies" background= {true} backdrop = {true}>
       <section>
        <h1 className='l-title'>indi<span className='l-title-span'>Caf<span>&eacute;</span></span></h1>
        <p>
          <button className='btn btn-warning l-btn'>
            <Link to='/browse' style={{color:'inherit'}}>Explore</Link>
          </button> our offers and enjoy the delicious foods
        </p>
        <p>
          Home Delivery in 30 min flat.
        </p>
        </section> 
    </Layout>
    </>
  )
}

export default LandingPage;