import { conexion } from './database.js'
import { ObjectId } from 'mongodb'

async function viewFields () {
  return conexion(async function (db) {
    const fields = await db.collection('canchas').find({}).toArray()
    return fields
  })
}

async function newField (dataField) {
  const newField = {
    lugar: dataField.lugar,
    _id: new ObjectId(),
    cantidad_jugadores: dataField.cantidad_jugadores
  }
  return conexion(async function (db) {
    const fields = await db.collection('canchas').insertOne(newField)
    return fields
  })
}

async function removeField (id) {
  return conexion(async function (db) {
    const field = await db.collection('canchas').deleteOne({ _id: ObjectId(id) })
    return field
  })
}

async function findByID (id) {
  return conexion(async function (db) {
    const field = await db.collection('canchas').find({ _id: ObjectId(id) }).toArray()
    // usar funcion findOne
    return field[0]
  })
}

async function updateField (dataField, id) {
  const newField = {
    lugar: dataField.lugar,
    cantidad_jugadores: dataField.cantidad_jugadores
  }
  return conexion(async function (db) {
    const field = await db.collection('canchas').updateOne({ _id: ObjectId(id) }, { $set: newField })
    return field
  })
}

export {
  viewFields,
  newField,
  removeField,
  findByID,
  updateField
}
