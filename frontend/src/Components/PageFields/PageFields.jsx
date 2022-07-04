import React, { useEffect, useState } from 'react'
import CardField from '../CardField/CardField.jsx'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin.jsx'

function PageFields () {
  const [fields, setFields] = useState(null)
  useEffect(() => {
    fetch('/api/fields')
      .then(res => res.json())
      .then((data) => setFields(data))
  }, [])
  return (
    <>
    <NavBarAdmin />
    <div className='container'>
        <div className='row'>
        <h1>Administra tus canchas:</h1>
        {fields !== null ? fields.map((e) => <CardField key={e._id} fieldItem={e}/>) : <p>Cargando canchas...</p>}

        </div>
    </div>
    </>
  )
}

export default PageFields
