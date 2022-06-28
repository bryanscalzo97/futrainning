import React, { useState } from 'react'

function CreateGame () {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      lugar: location,
      fecha: date
    }
    fetch(('/api/Games'), {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(alert('Se creo el juego correctamente'))
  }

  function handleLocation (event) {
    setLocation(event.target.value)
  }

  function handleDate (event) {
    setDate(event.target.value)
  }

  return (
    <>
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
                    Fecha:
                    <input
                        type="datetime-local"
                        onChange={handleDate}
                        value={date} />
                </label>
                <br />
                <button className='btn btn-primary' type="submit">Crear Juego</button>
    </form>
    </>
  )
}

export default CreateGame
