import React, { useState } from 'react'
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

function CreatePlayingField () {
  const [location, setLocation] = useState('')
  const [numJugadores, setNumJugadores] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleSubmit (event) {
    event.preventDefault()
    if (location === '' || numJugadores === '') {
      setError('Por favor ingresa la fecha y el lugar del juego')
    } else {
      const _datos = {
        lugar: location,
        cantidad_jugadores: numJugadores
      }
      fetch(('/api/fields'), {
        method: 'POST',
        body: JSON.stringify(_datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'auth-token': localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(alert('Se creo la cancha correctamente'))
        .then(navigate('/pageFields'))
    }
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
          <Heading fontSize={'4xl'}>Crear nueva Cancha</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="text" isRequired>
              <FormLabel>Direccion</FormLabel>
              <Input type="text" onChange={handleLocation} value={location} required/>
            </FormControl>
            <FormControl id="number" isRequired>
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
                Crear cancha
              </Button>
            </Stack>
          </Stack>
          {error && <p>{error}</p>}
        </Box>
      </Stack>
    </Flex>
  </>
  )
}

export default CreatePlayingField
