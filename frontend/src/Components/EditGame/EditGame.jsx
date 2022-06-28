import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function EditGame () {
  const params = useParams()
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    fetch(`/api/Games/id/${params.idUser}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then((data) => { setLocation(data.lugar); setDate(data.fecha) })
  }, [])

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      _id: `${params.idUser}`,
      lugar: location,
      fecha: date
    }
    fetch(('/api/Games'), {
      method: 'PATCH',
      body: JSON.stringify(_datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(alert('Se edito el juego correctamente'))
  }

  function handleLocation (event) {
    setLocation(event.target.value)
  }

  function handleDate (event) {
    setDate(event.target.value)
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
                    Fecha:
                    <input
                        type="datetime-local"
                        onChange={handleDate}
                        value={date} />
                </label>
                <br />
                <button className='btn btn-primary' type="submit">Editar Juego</button>
    </form>
    </div>
  )
}

export default EditGame
