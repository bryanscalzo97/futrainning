import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

function EditGame () {
  const params = useParams()
  // const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  // aca almaceno todos los campos
  const [field, setField] = useState(null)
  // aca tengo el id del campo que esta seleccionado
  // const [idfield, setidField] = useState(null)

  const [fieldSelected, setfieldSelected] = useState('')

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
      .then((data) => { setDate(data.fecha); setfieldSelected(data.cancha) })
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
      idCancha: fieldSelected,
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
    <div>
      <h1>Editar Juego</h1>
      <form onSubmit={handleSubmit}>
                <label>
                    Fecha:
                    <input
                        type="datetime-local"
                        onChange={handleDate}
                        value={date} />
                </label>
                <br />
                <label className='d-block'>Seleccionar Cancha</label>
                           { field !== null ? (<select className="form-select" aria-label="Default select example" onChange={handleField} value={fieldSelected} required>{field.map((e) => <option key={e._id} value={e._id}>{e.lugar}</option>)}</select>) : ''}
                <button className='btn btn-primary' type="submit">Editar Juego</button>
    </form>
    </div>
  )
}

export default EditGame
