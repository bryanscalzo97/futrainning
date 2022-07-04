import jwt from 'jsonwebtoken'
import * as service from '../services/user.service.js'

function authorization (req, res, next) {
  try {
    const token = req.headers['auth-token'] || ''
    const user = jwt.verify(token, 'CLAVE_SECRETA')
    req.user = user
    // console.log('este es el usuario ' + JSON.stringify(user))
    // const id = req.user.id
    next()
  } catch (err) {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
}

async function isAdmin (req, res, next) {
  const userRole = await service.findByID(req.user.id)
  console.log('este es el id del user' + req.user.id)
  if (userRole.role === 'admin') { next() } else {
    res.status(401).json({
      message: 'Unauthorized role'
    })
  }
}

export {
  authorization,
  isAdmin

}
