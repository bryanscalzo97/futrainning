import { conexion } from './database.js'
import { ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const COLLECTION_NAME = 'usuarios'

async function create (user) {
  return conexion(async db => {
    const userOld = await db.collection(COLLECTION_NAME).findOne({ email: user.email })
    if (!userOld) {
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(user.password, salt)
      const userToCreate = {
        ...user,
        password: passwordHash,
        role: 'user'
      }
      await db.collection(COLLECTION_NAME).insertOne(userToCreate)
      return userToCreate
    } else {
      throw new Error('User already exists')
    }
  })
}

async function login ({ email, password }) {
  return conexion(async db => {
    const user = await db.collection(COLLECTION_NAME).findOne({ email })
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (isPasswordValid) {
        return { ...user, password: undefined }
      }
    }
  })
}

async function findByID (id) {
  return conexion(async function (db) {
    const user = await db.collection('usuarios').find({ _id: ObjectId(id) }).toArray()
    return { ...user[0], password: undefined }
  })
}

export {
  create,
  login,
  findByID
}
