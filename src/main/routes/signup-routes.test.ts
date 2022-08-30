import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'some_name',
        email: 'some_email@email.com',
        password: 'some_password',
        passwordConfirmation: 'some_password'
      })
      .expect(200)
  })
})
