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
import * as authService from '../../Services/auth.service.js'
import Footer from '../Footer/Footer.jsx'

function Login ({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    authService.login(email, password)
      .then((data) => {
        console.log('data', data)
        onLogin(data.user, data.token)
      })
      .catch(err => setError(err.message))
  }
  return (
    <Stack spacing={4} w={'full'} maxW={'md'}>
          <h1>Bienvenido a Futraining</h1>
          <Heading fontSize={'2xl'}>Ingresa a tu cuenta</Heading>
          <FormControl id='email'>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="contraseña"
              onChange={e => setPassword(e.target.value)}
              name="password"
              value={password}
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
          {error && <p>{error}</p>}
        <Footer />
        </Stack>
  )
}

export default Login
