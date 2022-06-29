import express from 'express'
import * as controller from '../controllers/users.controller.js'

const router = express.Router()

router.post('/user', controller.create)
router.post('/users/login', controller.login)

export default router
