import React, { useEffect, useState } from 'react'
import Game from '../Game/Game.jsx'
import HomeCarousel from '../HomeCarousel/HomeCarousel.jsx'

function Home () {
  const [games, setGames] = useState(null)

  useEffect(() => {
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
    <>
    <div className='container'>
        <div className='row'>
    <HomeCarousel />
        <h1>Próximos juegos:</h1>
        {games !== null ? games.map((e) => <Game key={e._id} gameItem={e}/>) : <p>Loading</p>}

        </div>
    </div>
    </>
  )
}

export default Home
