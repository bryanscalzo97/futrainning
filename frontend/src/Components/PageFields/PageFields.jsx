import React, { useEffect, useState } from 'react'
import CardField from '../CardField/CardField.jsx'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin.jsx'
import {
  Stack,
  Heading
} from '@chakra-ui/react'
function PageFields () {
  const [fields, setFields] = useState(null)
  useEffect(() => {
    fetch('/api/fields', {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then((data) => setFields(data))
  }, [])
  return (
    <>
    <NavBarAdmin />
    <div className='container'>
        <div className='row'>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Administra tus canchas</Heading>
        </Stack>
        {fields !== null ? fields.map((e) => <CardField key={e._id} fieldItem={e}/>) : <p>Cargando canchas...</p>}

        </div>
    </div>
    </>
  )
}

export default PageFields
