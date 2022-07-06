/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  FormHelperText
} from '@chakra-ui/react'
import React, { useState } from 'react'
// import * as authService from '../../Services/auth.service.js'
import Footer from '../Footer/Footer.jsx'
import * as authService from '../../Services/auth.service.js'

function SignUp ({ onLogin }) {
  const [mail, setMail] = useState('')
  const [contraseña, setContraseña] = useState('')
  //   const [error, setError] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    const _datos = {
      email: mail,
      password: contraseña
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
  return (
    <Stack spacing={4} w={'full'} maxW={'md'}>
          <h1>Bienvenido a Futraining</h1>
          <Heading fontSize={'2xl'}>Registrate</Heading>
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
          <Stack spacing={6}>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
               onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
          {/* {error && <p>{error}</p>} */}
        <Footer />
        </Stack>
  )
}

export default SignUp
