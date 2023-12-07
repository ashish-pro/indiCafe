import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes