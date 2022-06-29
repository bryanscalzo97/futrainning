import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './styles.css'

function CreateGame () {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      lugar: location,
      fecha: date
    }
    fetch(('/api/Games'), {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(alert('Se creo el juego correctamente'))
      .then(navigate('/'))
  }

  function handleLocation (event) {
    setLocation(event.target.value)
  }

  function handleDate (event) {
    setDate(event.target.value)
  }

  return (
    <div className='container'>
      <div className='row'>
          <form onSubmit={handleSubmit} className=' formulario'>
        <h1>Crear un nuevo juego:</h1>
                <label className='d-block'>Lugar:</label>
                <input className='d-block'
                        type="text"
                        onChange={handleLocation}
                        value={location} />
                <label className='d-block'>Fecha:</label>
                <input className='d-block'
                        type="datetime-local"
                        onChange={handleDate}
                        value={date} />
                <button className='btn btn-primary d-block btn-submit' type="submit">Crear Juego</button>
          </form>
      </div>
    </div>
  )
}

export default CreateGame
