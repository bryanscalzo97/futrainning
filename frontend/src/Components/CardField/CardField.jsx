/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'
import {
  Button
} from '@chakra-ui/react'
// import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'

function CardField ({ fieldItem }) {
  const navegar = useNavigate()
  const { lugar, cantidad_jugadores, _id } = fieldItem
  function deleteGame (_id) {
    fetch((`/api/fields/${_id}`), {
      method: 'DELETE',
      // body: JSON.stringify({ _id }),
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
  return (
    <Card className='col-4' style={{ width: '18rem', margin: '1em', padding: '1em' }}>
        <Card.Body>
        <Card.Text style={{ fontWeight: 'bolder' }}>{lugar}</Card.Text>
        <Card.Text>Cantidad de Jugadores: {cantidad_jugadores}</Card.Text>
        <Button style={{ marginRight: '0.5em' }}
              colorScheme={'gray'}
              variant={'solid'}
               onClick={() => deleteGame(_id)}
            >
              Eliminar
        </Button>
        <Link to={`/editField/${_id}`}>
        <Button
              colorScheme={'blue'}
              variant={'solid'}
              >
               Editar
            </Button>
         </Link>
        {/* <Link to= { `/attendGame/${_id}` } state={{ data: gameItem }}>
        <Button className='btn btn-light' variant="primary">Asistir al juego</Button>
        </Link> */}
        </Card.Body>
      </Card>
  )
}

export default CardField
