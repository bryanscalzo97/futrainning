/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function CardGameUser ({ gameItem }) {
  console.log(gameItem)
  const { lugar, fecha, jugadores, _id } = gameItem
  return (
    <Card className='col-4' style={{ width: '18rem', margin: '1em', padding: '1em' }}>
        <Card.Body>
        <Card.Text>{fecha}</Card.Text>
        <Card.Text>{lugar}</Card.Text>
        <Card.Text>Hacen falta {11 - jugadores.length} jugadores</Card.Text>
        <Link to= { `/attendGame/${_id}` } state={{ data: gameItem }}>
        <Button className='btn btn-light' variant="primary">Asistir al juego</Button>
        </Link>
        {/* <Link to={`/editField/${_id}`}>
         <Button className='btn btn-light' variant="primary">Editar cancha</Button>
         </Link> */}
        </Card.Body>
      </Card>
  )
}

export default CardGameUser
