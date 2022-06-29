import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../Components/Home/Home.jsx'
import Login from '../Components/Login/Login.jsx'
import CreateGame from '../Components/CreateGame/CreateGame.jsx'
import EditGame from '../Components/EditGame/EditGame.jsx'
import AttendGame from '../Components/AttendGame/AttendGame.jsx'
import PageLogin from '../Components/PageLogin/PageLogin.jsx'

function AppRouter () {
  const navigate = useNavigate()

  useEffect(
    () => {
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/login', { replace: true })
      }
    }, [])

  function onLogin (user, token) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    navigate('/', { replace: true })
  }

  return (
    <Routes>
      <Route path="/login" element={<PageLogin onLogin={onLogin} />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createGame" element={<CreateGame />} />
      <Route path="/editGame/:idUser" element={<EditGame />} />
      <Route path="/attendGame/:idGame" element={<AttendGame />} />

    </Routes>
  )
}

export default AppRouter
