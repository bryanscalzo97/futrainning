import { conexion } from './database.js'
import { ObjectId } from 'mongodb'

async function viewGames () {
  return conexion(async function (db) {
    const games = await db.collection('juegos').find({}).toArray()
    return games
  })
}

async function newGame (locationGame) {
  const newGame = {
    lugar: locationGame.lugar,
    _id: new ObjectId(),
    fecha: locationGame.fecha,
    jugadores: []
  }
  return conexion(async function (db) {
    const game = await db.collection('juegos').insertOne(newGame)
    return game
  })
}

async function removeGame (id) {
  return conexion(async function (db) {
    const game = await db.collection('juegos').deleteOne({ _id: ObjectId(id) })
    return game
  })
}

async function findByID (id) {
  return conexion(async function (db) {
    const game = await db.collection('juegos').find({ _id: ObjectId(id) }).toArray()
    return game[0]
  })
}

async function updateGame (newGame, id) {
  return conexion(async function (db) {
    const category = await db.collection('juegos').updateOne({ _id: ObjectId(id) }, { $set: { lugar: newGame.lugar, fecha: newGame.fecha } })
    return category
  })
}

export {
  viewGames,
  newGame,
  removeGame,
  findByID,
  updateGame
}
