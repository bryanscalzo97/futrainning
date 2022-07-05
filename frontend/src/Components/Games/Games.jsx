import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Games () {
  const [games, setGames] = useState(null)
  useEffect(() => {
    console.log('esto es el token' + localStorage.getItem('token'))
    fetch('/api/Games', {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then((data) => setGames(data))
  }, [])
  return (
    <div>
        <h2>Juegos:</h2>
        <Link to="/CreateGame">
          <p>Crear Juego</p>
        </Link>
        <ul>
            {games !== null ? games.map((e) => <li key={e._id}>{e.lugar}</li>) : <p>loading...</p>}
        </ul>

    </div>
  )
}

export default Games
