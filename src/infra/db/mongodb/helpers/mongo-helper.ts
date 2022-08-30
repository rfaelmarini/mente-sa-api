import { MongoClient } from 'mongodb'

export const MongoHelper = {
  clinet: null as MongoClient,

  async connect(uri: string) {
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect() {
    await this.client.close()
  }
}
