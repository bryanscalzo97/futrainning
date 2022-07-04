import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin'
import './styles.css'

function CreatePlayingField () {
  const [location, setLocation] = useState('')
  const [numJugadores, setNumJugadores] = useState('')

  const navigate = useNavigate()

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      lugar: location,
      cantidad_jugadores: numJugadores
    }
    fetch(('/api/fields'), {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(alert('Se creo la cancha correctamente'))
      .then(navigate('/'))
  }

  function handleLocation (event) {
    setLocation(event.target.value)
  }

  function handleNumJugadores (event) {
    setNumJugadores(event.target.value)
  }
  return (
  <>
  <NavBarAdmin />
    <div className='container'>
      <div className='row'>
          <form onSubmit={handleSubmit} className=' formulario'>
        <h1>Crear una nueva cancha</h1>
                <label className='d-block'>Direccion:</label>
                <input className='d-block'
                        type="text"
                        onChange={handleLocation}
                        value={location} />
                <label className='d-block'>Cantidad de Jugadores:</label>
                <input className='d-block'
                        type="number"
                        onChange={handleNumJugadores}
                        value={numJugadores} />
                <button className='btn btn-primary d-block btn-submit' type="submit">Crear Cancha</button>
          </form>
      </div>
    </div>
  </>
  )
}

export default CreatePlayingField
