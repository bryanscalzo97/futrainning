import React, { useEffect, useState } from 'react'
import CardGameUser from '../CardGameUser/CardGameUser.jsx'
import NavBar from '../NavBar/NavBar.jsx'

function Home () {
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
    <NavBar />
    <div className='container'>
        <div className='row'>
        <h1>Próximos juegos:</h1>
        {games !== null ? games.map((e) => <CardGameUser key={e._id} gameItem={e}/>) : <p>Loading</p>}

        </div>
    </div>
    </>
  )
}

export default Home
