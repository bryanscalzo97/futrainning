import React, { useEffect, useState } from 'react'
import Game from '../Game/Game.jsx'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin.jsx'

function AdminPanel () {
  const [games, setGames] = useState(null)
  useEffect(() => {
    fetch('/api/Games', {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then((data) => setGames(data))
  }, [])
  return (
    <>
      <NavBarAdmin />
      <div className='container'>
          <div className='row'>
          <h1>Panel de admin de juegos:</h1>
          {games !== null ? games.map((e) => <Game key={e._id} gameItem={e}/>) : <p>Loading</p>}
          </div>
      </div>
      </>
  )
}

export default AdminPanel
