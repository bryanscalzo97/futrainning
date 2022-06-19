import { conexion } from './database.js'
// import { ObjectId } from 'mongodb'

// API
async function viewTeams () {
  return conexion(async function (db) {
    const teams = await db.collection('equipos').find({}).toArray()
    return teams
  })
}

export {
  viewTeams
}
