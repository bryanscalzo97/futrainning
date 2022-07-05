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
function EditField () {
  const params = useParams()
  const [location, setLocation] = useState('')
  const [numJugadores, setNumJugadores] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/api/fields/${params.idField}`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem('token')
      }

    })
      .then(res => res.json())
      .then((data) => { setLocation(data.lugar); setNumJugadores(data.cantidad_jugadores) })
      .then((data) => console.log(data))
  }, [])

  function handleSubmit (event) {
    event.preventDefault()
    const _datos = {
      lugar: location,
      cantidad_jugadores: numJugadores
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

  function handleNumJugadores (event) {
    setNumJugadores(event.target.value)
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
          <Heading fontSize={'4xl'}>Editar Cancha</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Direccion</FormLabel>
              <Input type="text" onChange={handleLocation} value={location} required/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Numero de jugadores</FormLabel>
              <Input type="number" onChange={handleNumJugadores} value={numJugadores}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={handleSubmit}
                >
                Editar Cancha
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </>
  )
}

export default EditField
