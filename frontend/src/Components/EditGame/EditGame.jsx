import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

function EditGame () {
  const params = useParams()
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/api/Games/${params.idUser}`, {
      method: 'POST',
      headers: {
        // 'auth-token': TOKEN
        'auth-token': localStorage.getItem('token')
      }

    })
      .then(res => res.json())
      .then((data) => { setLocation(data.lugar); setDate(data.fecha) })
  }, [])

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      lugar: location,
      fecha: date
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
