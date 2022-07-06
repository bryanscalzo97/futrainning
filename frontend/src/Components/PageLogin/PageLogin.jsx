/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Flex,
  Stack,
  Image,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormHelperText,
  Select
} from '@chakra-ui/react'
import Footer from '../Footer/Footer.jsx'
import * as authService from '../../Services/auth.service.js'

function PageLogin ({ onLogin }) {
  const [isUser, setIsUser] = useState(false)
  const [mail, setMail] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [rol, setRol] = useState('jugador')

  function SignUp (e) {
    e.preventDefault()
    const _datos = {
      email: mail,
      password: contraseña,
      role: rol
    }
    console.log('esto es lo que esta en el front', _datos)
    fetch(('/api/users'), {
      method: 'POST',
      body: JSON.stringify(_datos),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(alert('Se creo el juego correctamente'))
      .then(authService.login(mail, contraseña)
        .then((data) => {
          console.log('data', data)
          onLogin(data.user, data.token)
        })
        .catch(err => console.log(err.message)))
  }

  function Login (e) {
    e.preventDefault()
    authService.login(mail, contraseña)
      .then((data) => {
        console.log('data', data)
        onLogin(data.user, data.token)
      })
      .catch(err => console.log(err.message))
  }

  function handleSubmit (e) {
    e.preventDefault()
    isUser === false ? SignUp(e) : Login(e)
  }

  function handleRol (selected) {
    setRol(selected.target.value)
  }
  return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'}>
          <h1>Bienvenido a Futraining</h1>
          {isUser === false ? <Heading fontSize={'2xl'}>Registrate</Heading> : <Heading fontSize={'2xl'}>Login</Heading>}
          <FormControl id='email'>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              onChange={e => setMail(e.target.value)}
              placeholder="Email"
              name="email"
              value={mail}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="contraseña"
              onChange={e => setContraseña(e.target.value)}
              name="password"
              value={contraseña}
            />
            <FormHelperText>{}</FormHelperText>
          </FormControl>
          {isUser === false
            ? <FormControl id="select">
                <FormLabel>Selecciona tu rol</FormLabel>
                  <Select placeholder='Selecciona el rol' onChange={handleRol} value={rol}>
                    <option value='admin'>Administrador</option>
                    <option value='jugador'>Jugador</option>
                  </Select>
                </FormControl>
            : ''}
          <Stack spacing={6}>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
               onClick={handleSubmit}
            >
              {isUser === false ? 'Registrarme' : 'Login' }
            </Button>
            {isUser === false
              ? <Button
              colorScheme={'gray'}
              variant={'solid'}
               onClick={() => setIsUser(true)}
            >
              ¿Ya tienes un usuario?
            </Button>
              : <Button
              colorScheme={'gray'}
              variant={'solid'}
               onClick={() => setIsUser(false)}
            >
              ¿Quieres registrarte?
            </Button>}
          </Stack>
          {/* {error && <p>{error}</p>} */}
        <Footer />
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default PageLogin
