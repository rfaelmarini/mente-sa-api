import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongodbRepository } from './account'

describe('Account Mongodb Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): AccountMongodbRepository => {
    return new AccountMongodbRepository()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'some_name',
      email: 'some_email@email.com',
      password: 'some_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('some_name')
    expect(account.email).toBe('some_email@email.com')
    expect(account.password).toBe('some_password')
  })
})
