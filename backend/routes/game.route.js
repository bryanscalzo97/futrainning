import express from 'express'
import gameController from '../controllers/games.controller.js'
const route = express.Router()
route.get('/api/Teams', gameController.viewTeams)

export default route
