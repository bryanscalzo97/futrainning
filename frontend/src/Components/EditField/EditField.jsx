import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

function EditField () {
  const params = useParams()
  const [location, setLocation] = useState('')
  const [numJugadores, setNumJugadores] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/api/fields/${params.idField}`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem('token')
      }

    })
      .then(res => res.json())
      .then((data) => { setLocation(data.lugar); setNumJugadores(data.cantidad_jugadores) })
      .then((data) => console.log(data))
  }, [])

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      lugar: location,
      cantidad_jugadores: numJugadores
    }
    fetch((`/api/Games/${params.idUser}`), {
      method: 'PATCH',
      body: JSON.stringify(_datos),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(alert('Se edito el juego correctamente'))
      .then(navigate('/'))
  }

  function handleLocation (event) {
    setLocation(event.target.value)
  }

  function handleNumJugadores (event) {
    setNumJugadores(event.target.value)
  }
  return (
    <div>
      <h1>Editar Juego</h1>
      <form onSubmit={handleSubmit}>
                <label>
                    Lugar:
                    <input
                        type="text"
                        onChange={handleLocation}
                        value={location} />
                </label>
                <br />
                <label>
                    Cantidad de jugadores
                    <input
                        type="number"
                        onChange={handleNumJugadores}
                        value={numJugadores} />
                </label>
                <br />
                <button className='btn btn-primary' type="submit">Editar Cancha</button>
    </form>
    </div>
  )
}

export default EditField
