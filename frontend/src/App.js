import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter.js'
import Footer from './Components/Footer/Footer.jsx'
import NavBar from './Components/NavBar/NavBar'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
