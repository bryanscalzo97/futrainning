import React, { useEffect, useState } from 'react'
import Game from '../Game/Game.jsx'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin.jsx'
import {
  Stack,
  Heading
} from '@chakra-ui/react'

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
          <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Panel de admin de juegos</Heading>
        </Stack>
          {games !== null ? games.map((e) => <Game key={e._id} gameItem={e}/>) : <p>Loading</p>}
          </div>
      </div>
      </>
  )
}

export default AdminPanel
