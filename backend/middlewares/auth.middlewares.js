import jwt from 'jsonwebtoken'

function authorization (req, res, next) {
  try {
    const token = req.headers['auth-token'] || ''
    const user = jwt.verify(token, 'CLAVE_SECRETA')
    req.user = user
    next()
  } catch (err) {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
}

export {
  authorization
}
