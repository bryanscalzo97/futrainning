import express from 'express'
import fieldController from '../controllers/fields.controller.js'
import { authorization, isAdmin } from '../middlewares/auth.middlewares.js'

const route = express.Router()

route.all('/', authorization)
route.all('/*', authorization)

route.get('/', fieldController.viewFields)
route.post('/', [isAdmin], fieldController.newField)
route.post('/:idField', fieldController.viewOne)
route.delete('/:idField', [isAdmin], fieldController.removeField)
route.patch('/:idField', [isAdmin], fieldController.updateField)

export default route
