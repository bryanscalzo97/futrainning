/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'

function Game ({ gameItem }) {
  const navegar = useNavigate()
  console.log(gameItem)
  const { lugar, fecha, jugadores, _id } = gameItem
  function deleteGame (_id) {
    fetch((`/api/Games/${_id}`), {
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
  console.log(jugadores)
  // const token = localStorage.getItem('token')
  return (
      <Card className='col-4' style={{ width: '18rem', margin: '1em', padding: '1em' }}>
        <Card.Body>
        <Card.Text>{fecha}</Card.Text>
        <Card.Text>{lugar}</Card.Text>
        <Card.Text>Hacen falta {11 - jugadores.length} jugadores</Card.Text>
        <Button className='btn btn-danger' onClick={() => deleteGame(_id)} variant="primary">Eliminar Juego</Button>
         <Link to={`/editGame/${_id}`}>
         <Button className='btn btn-light' variant="primary">Editar el Juego</Button>
         </Link>
        </Card.Body>
      </Card>
  )
}
export default Game
