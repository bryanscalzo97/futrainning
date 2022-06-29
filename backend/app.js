import express from 'express'
import GameRoute from './routes/game.route.js'
import UserRoute from './routes/user.route.js'

const app = express()
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))// ParseBody cuando viene en formato urlencoded
app.use(express.json()) // ParseBody cuando viene en formato JSON
app.use('/', GameRoute)
app.use('/api/', UserRoute)

app.listen(2022, function () {

})
