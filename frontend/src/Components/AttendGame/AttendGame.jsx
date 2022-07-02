import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function AttendGame () {
  const location = useLocation()
  const data = location.state?.data
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      nombre: name,
      email: mail
    }
    if (data.jugadores.length < 11) {
      fetch(`/api/Games/${data._id}/Player`, {
        method: 'POST',
        body: JSON.stringify(_datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'auth-token': localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(alert('Te anotaste al juego correctamente'))
        .then(navigate('/Home'))
    } else { alert('Ya esta completo este juego, puedes anotarte en otro') }
  }

  function handleNombre (event) {
    setName(event.target.value)
  }

  function handleEmail (event) {
    setMail(event.target.value)
  }
  return (
    <div>
        <h1>Lugar: {data.lugar}</h1>
        <h2>Fecha: {data.fecha}</h2>
        <h2>Jugadores:</h2>
        {data.jugadores && data.jugadores.map((e) => <p key={e.nombre}>{e.nombre}</p>)}
        <form onSubmit={handleSubmit}>
                        <label>
                            Nombre:
                            <input
                                type="text"
                                onChange={handleNombre}
                                value={name} />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="text"
                                onChange={handleEmail}
                                value={mail} />
                        </label>
                        <br />
                        <button className='btn btn-primary' type="submit">Anotarme al juego</button>
        </form>
    </div>
  )
}
export default AttendGame
