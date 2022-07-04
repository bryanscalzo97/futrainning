import express from 'express'
import fieldController from '../controllers/fields.controller.js'
// import { authorization } from '../middlewares/auth.middlewares.js'

const route = express.Router()
// todo: descomentar
// route.all('/', authorization)
// route.all('/*', authorization)

route.get('/', fieldController.viewFields)
route.post('/', fieldController.newField)
route.post('/:idField', fieldController.viewOne)
route.delete('/:idField', fieldController.removeField)
route.patch('/:idField', fieldController.updateField)

export default route
// agregar una entidad con los datos de la cancha, cantidad de jugadores por cancha, agregarlo en otra coleccion
// dentro de las canchas puede estar el id del admin, cada admin tiene su propia cancha

// validaciones para no repetir cancha en horario

// front
// usuario solo se puede anotar
// admin crea juegos en canchas, abml canchas y partidos
