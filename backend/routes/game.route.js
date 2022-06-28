import express from 'express'
import gameController from '../controllers/games.controller.js'

const route = express.Router()

route.get('/api/Games', gameController.viewGames)
route.post('/api/Games', gameController.newGame)
route.post('/api/Games/id/:idGame', gameController.viewOne)
route.delete('/api/Games', gameController.removeGame)
route.patch('/api/Games/', gameController.updateGame)

export default route