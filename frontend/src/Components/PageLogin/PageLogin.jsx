/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import * as authService from '../../Services/auth.service.js'

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>

  )
}

export default PageLogin
