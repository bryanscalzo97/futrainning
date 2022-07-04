/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
        <Card.Text>Dirección: {lugar}</Card.Text>
        <Card.Text>Cantidad de Jugadores: {cantidad_jugadores}</Card.Text>
        <Button className='btn btn-danger' onClick={() => deleteGame(_id)} variant="primary">Eliminar Cancha</Button>
        <Link to={`/editField/${_id}`}>
         <Button className='btn btn-light' variant="primary">Editar cancha</Button>
         </Link>
        {/* <Link to= { `/attendGame/${_id}` } state={{ data: gameItem }}>
        <Button className='btn btn-light' variant="primary">Asistir al juego</Button>
        </Link> */}
        </Card.Body>
      </Card>
  )
}

export default CardField
