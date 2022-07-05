import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin'

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
    <>
    <NavBarAdmin />
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Editar juego</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Fecha</FormLabel>
              <Input type="datetime-local" onChange={handleDate} value={date} required/>
            </FormControl>
            { field !== null ? (<select className="form-select" aria-label="Default select example" onChange={handleField} value={fieldSelected}> <option selected>Selecciona una cancha</option>{field.map((e) => <option key={e._id} value={e._id}>{e.lugar}</option>)}</select>) : ''}
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={handleSubmit}
                >
                Editar juego
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>

  )
}

export default EditGame
