import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
import NavBar from '../NavBar/NavBar.jsx'

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
    <>
    <NavBar />
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Asistir al juego</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="text">
              <FormLabel>Nombre</FormLabel>
              <Input type="text" onChange={handleNombre} value={name} required/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="text" onChange={handleEmail} value={mail} required/>
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
                Asistir al juego
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  )
}
export default AttendGame
