import mongodb from 'mongodb'

const client = new mongodb.MongoClient('mongodb://127.0.0.1:27017')

export async function conexion (callback) {
  await client.connect()

  const result = await callback(client.db('futrainning'))

  await client.close()

  return result
}
