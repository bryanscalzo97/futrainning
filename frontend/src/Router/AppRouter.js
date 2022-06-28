import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home.jsx'
import Login from '../Components/Login/Login.jsx'
import CreateGame from '../Components/CreateGame/CreateGame.jsx'
import EditGame from '../Components/EditGame/EditGame.jsx'

function AppRouter () {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createGame" element={<CreateGame />} />
      <Route path="/editGame/:idUser" element={<EditGame />} />

    </Routes>
  )
}

export default AppRouter
