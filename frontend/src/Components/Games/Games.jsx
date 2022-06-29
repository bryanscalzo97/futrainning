import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Games () {
  const [games, setGames] = useState(null)
  // const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmM3MDg1NjY0ZDBhODc2NmQ2MGJiYiIsIm5hbWUiOiJCcnlhbiBTY2Fsem8iLCJpYXQiOjE2NTY1MzU2NjJ9.M8_3bW4VYwgVlD5ENoSnwNmRdOY67qE0gF4DJuD7hP8'
  useEffect(() => {
    console.log('esto es el token' + localStorage.getItem('token'))
    fetch('/api/Games', {
      headers: {
        // 'auth-token': TOKEN
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
