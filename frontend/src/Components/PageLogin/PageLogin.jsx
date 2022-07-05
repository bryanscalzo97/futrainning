/* eslint-disable react/prop-types */
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormHelperText
} from '@chakra-ui/react'
import React, { useState } from 'react'
import * as authService from '../../Services/auth.service.js'
import Footer from '../Footer/Footer.jsx'

function PageLogin ({ onLogin }) {
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
        // <div className='container'>
        //     <h1>Login</h1>
        //     <form className="row g-3" onSubmit={handleSubmit}>
        //       <div className="col-12">
        //         <label className="form-label">Email</label>
        //         <input type="email" className="form-control" id="inputEmail4" value={email} onChange={e => setEmail(e.target.value)} required/>
        //       </div>
        //       <div className="col-12">
        //         <label className="form-label">Password</label>
        //         <input type="password" className="form-control" id="inputPassword4" value={password} onChange={e => setPassword(e.target.value)} required/>
        //       </div>
        //       <div className="col-12">
        //         <button type="submit" className="btn btn-primary">Sign in</button>
        //       </div>
        //     </form>
        //     {error && <p>{error}</p>}
        // </div>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
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
