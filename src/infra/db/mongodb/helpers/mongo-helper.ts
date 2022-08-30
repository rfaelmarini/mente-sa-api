import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  clinet: null as MongoClient,

  async connect(uri: string) {
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect() {
    await this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}