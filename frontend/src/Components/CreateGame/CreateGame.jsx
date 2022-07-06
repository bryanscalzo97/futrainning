/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin'
import './styles.css'
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

function CreateGame () {
  const [date, setDate] = useState('')
  const [field, setField] = useState(null)
  const [fieldSelected, setfieldSelected] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/fields', {
      headers: {
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
      idCancha: fieldSelected,
      idAdmin: localStorage.getItem('_id')
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
          <Heading fontSize={'4xl'}>Crear nuevo juego</Heading>
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
                Crear juego
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>

  )
}

export default CreateGame
