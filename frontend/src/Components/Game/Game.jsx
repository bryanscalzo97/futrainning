/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'
import {
  Button
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

function Game ({ gameItem }) {
  const navegar = useNavigate()
  console.log(gameItem)
  const { fecha, jugadores, _id, lugarCancha, cantidadJugadores } = gameItem
  function deleteGame (_id) {
    fetch((`/api/Games/${_id}`), {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(navegar(0))
    console.log('se enviaron los datos :)')
  }
  console.log(jugadores)
  // const token = localStorage.getItem('token')
  return (
      <Card className='col-md-12 col-lg-12' style={{ width: '18rem', margin: '1em', padding: '0.5em' }}>
        <Card.Body>
        <Card.Text style={{ fontWeight: 'bolder' }}>{lugarCancha}</Card.Text>
        <Card.Text>{fecha}</Card.Text>
        <Card.Text>Cupos disponibles: {cantidadJugadores - jugadores.length} jugadores</Card.Text>
        <Button style={{ marginRight: '0.5em' }}
              colorScheme={'gray'}
              variant={'solid'}
               onClick={() => deleteGame(_id)}
            >
              Eliminar
            </Button>

         <Link to={`/editGame/${_id}`}>
         <Button
              colorScheme={'blue'}
              variant={'solid'}
              >
               Editar
            </Button>
         </Link>
        </Card.Body>
      </Card>
  )
}
export default Game
