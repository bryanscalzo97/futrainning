import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter.js'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
