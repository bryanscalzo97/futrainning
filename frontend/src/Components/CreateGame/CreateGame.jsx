/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin'
import './styles.css'

function CreateGame () {
  // const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [field, setField] = useState(null)
  const [fieldSelected, setfieldSelected] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/fields', {
      headers: {
        // 'auth-token': TOKEN
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then((data) => setField(data))
      .then((data) => console.log(data))
  }, [])

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      // lugar: location,
      fecha: date,
      idCancha: fieldSelected
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

  // function handleLocation (event) {
  //   setLocation(event.target.value)
  // }

  function handleDate (event) {
    setDate(event.target.value)
  }
  function handleField (selected) {
    setfieldSelected(selected.target.value)
  }

  return (
    <>
    <NavBarAdmin />
    <div className='container'>
      <div className='row'>
          <form onSubmit={handleSubmit} className=' formulario'>
        <h1>Crear un nuevo juego:</h1>
                <label className='d-block'>Fecha:</label>
                <input className='d-block'
                        type="datetime-local"
                        onChange={handleDate}
                        value={date} />
                <label className='d-block'>Seleccionar Cancha</label>
                           { field !== null ? (<select className="form-select" aria-label="Default select example" onChange={handleField} value={fieldSelected}> <option selected>Selecciona una cancha</option>{field.map((e) => <option key={e._id} value={e._id}>{e.lugar}</option>)}</select>) : ''}
                <button className='btn btn-primary d-block btn-submit' type="submit">Crear Juego</button>
          </form>
      </div>
    </div>
    </>
  )
}

export default CreateGame
