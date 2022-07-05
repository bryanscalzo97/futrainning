/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'
import {
  Button
} from '@chakra-ui/react'

function CardGameUser ({ gameItem }) {
  console.log(gameItem)
  const { lugarCancha, fecha, jugadores, _id, cantidadJugadores } = gameItem
  return (
    <Card className='col-4' style={{ width: '18rem', margin: '1em', padding: '1em' }}>
        <Card.Body>
        <Card.Text style={{ fontWeight: 'bolder' }}>{lugarCancha}</Card.Text>
        <Card.Text>{fecha}</Card.Text>
        <Card.Text>Cantidad jugadores: {cantidadJugadores}</Card.Text>
        <Card.Text>Cupos disponibles: {cantidadJugadores - jugadores.length} jugadores</Card.Text>
        <Link to= { `/attendGame/${_id}` } state={{ data: gameItem }}>
        <Button style={{ marginRight: '0.5em' }}
              colorScheme={'blue'}
              variant={'solid'}
            >
              Asistir al juego
            </Button>
        </Link>
        </Card.Body>
      </Card>
  )
}

export default CardGameUser
