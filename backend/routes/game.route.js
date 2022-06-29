import express from 'express'
import gameController from '../controllers/games.controller.js'
import playerController from '../controllers/players.controller.js'
import { authorization } from '../middlewares/auth.middlewares.js'

const route = express.Router()

route.all('/api/Games', authorization)
route.all('/api/Games/*', authorization)

route.get('/api/Games', gameController.viewGames)
route.post('/api/Games', gameController.newGame)
route.post('/api/Games/id/:idGame', gameController.viewOne)
route.delete('/api/Games', gameController.removeGame)
route.patch('/api/Games/', gameController.updateGame)
route.post('/api/Games/Player', playerController.newPlayer)

export default route
