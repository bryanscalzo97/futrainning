import express from 'express'
import gameController from '../controllers/games.controller.js'
import playerController from '../controllers/players.controller.js'
import { authorization, isAdmin } from '../middlewares/auth.middlewares.js'

const route = express.Router()

route.all('/', authorization)
route.all('/*', authorization)

route.get('/', gameController.viewGames)
route.post('/', [isAdmin], gameController.newGame)
route.post('/:idGame', gameController.viewOne)
route.delete('/:idGame', [isAdmin], gameController.removeGame)
route.patch('/:idGame', [isAdmin], gameController.updateGame)
route.post('/:idGame/Player', playerController.newPlayer)

export default route
