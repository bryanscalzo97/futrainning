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
        <div className='container'>
            <h1>Login</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="col-12">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>
            {error && <p>{error}</p>}
        </div>

  )
}

export default PageLogin
