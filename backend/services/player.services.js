import { conexion } from './database.js'
import { ObjectId } from 'mongodb'

async function newPlayer (playerInfo, id) {
  const playerNew = {
    _id: playerInfo._id,
    nombre: playerInfo.nombre,
    email: playerInfo.email
  }
  return conexion(async function (db) {
    const player = await db.collection('juegos').updateOne({ _id: ObjectId(id) }, { $push: { jugadores: { _id: new ObjectId(), nombre: playerNew.nombre, email: playerNew.email } } })
    return player
  })
}

export {
  newPlayer
}
