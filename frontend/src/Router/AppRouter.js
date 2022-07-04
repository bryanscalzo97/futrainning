import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../Components/Home/Home.jsx'
import AdminPanel from '../Components/AdminPanel/AdminPanel.jsx'
import CreateGame from '../Components/CreateGame/CreateGame.jsx'
import EditGame from '../Components/EditGame/EditGame.jsx'
import AttendGame from '../Components/AttendGame/AttendGame.jsx'
import PageLogin from '../Components/PageLogin/PageLogin.jsx'
import CreatePlayingField from '../Components/CreatePlayingField/CreatePlayingField.jsx'
import PageFields from '../Components/PageFields/PageFields.jsx'
import EditField from '../Components/EditField/EditField.jsx'

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
    user.role === 'admin' ? navigate('/', { replace: true }) : navigate('/Home', { replace: true })
  }

  return (
    <Routes>
      <Route path="/login" element={<PageLogin onLogin={onLogin} />} />
      <Route path="/" element={<AdminPanel />} />
      <Route path="/AdminPanel" element={<AdminPanel />} />
      <Route path="/createPlayingField" element={<CreatePlayingField />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/createGame" element={<CreateGame />} />
      <Route path="/editGame/:idUser" element={<EditGame />} />
      <Route path="/attendGame/:idGame" element={<AttendGame />} />
      <Route path="/pageFields" element={<PageFields />} />
      <Route path="/editField/:idField" element={<EditField />} />

    </Routes>
  )
}

export default AppRouter
