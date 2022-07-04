import jwt from 'jsonwebtoken'
import * as service from '../services/user.service.js'

function create (req, res) {
  service.create(req.body)
    .then(() => res.status(201).json({
      message: 'User created'
    }))
    .catch(err => res.status(500).json({
      message: err.message
    }))
}

function login (req, res) {
  service.login(req.body)
    .then(user => {
      const token = jwt.sign({ id: user._id, name: user.name }, 'CLAVE_SECRETA')
      res.status(200).json({
        user,
        token
      })
    })
    .catch(err => res.status(500).json({
      message: err.message
    }))
}

function viewOne (req, res) {
  const id = req.params.idUser
  service.findByID(id)
    .then(function (user) {
      res.status(201).json(user)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export {
  create,
  login,
  viewOne
}
