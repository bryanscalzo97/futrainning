import express from 'express'
import GameRoute from './routes/game.route.js'
import UserRoute from './routes/user.route.js'
import FieldsRoute from './routes/field.route.js'

const app = express()
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))// ParseBody cuando viene en formato urlencoded
app.use(express.json()) // ParseBody cuando viene en formato JSON
app.use('/api/Games', GameRoute)
app.use('/api/users', UserRoute)
app.use('/api/fields', FieldsRoute)
// Final:
// utilizar mail(olvide password) o socket(notificaciones de quien se anoto al juego o chat)
// usar use context
// usar 2 de las 3 anteriores

app.listen(2022, function () {

})
