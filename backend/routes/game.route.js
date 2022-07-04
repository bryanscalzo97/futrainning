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
// agregar una entidad con los datos de la cancha, cantidad de jugadores por cancha, agregarlo en otra coleccion
// dentro de las canchas puede estar el id del admin, cada admin tiene su propia cancha

// validaciones para no repetir cancha en horario

// front
// usuario solo se puede anotar
// admin crea juegos en canchas, abml canchas y partidos
