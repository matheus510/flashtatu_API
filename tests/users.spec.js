import request from 'supertest'
import Server from '../src/app'

let testServer = new Server()
// Initializes server
testServer.init()

const mockUser = {
  'name': 'john',
  'email': 'john@gmail.com',
  'gender': 'male',
  'professional': false,
  'phone': '91283918123'
}

const mockUpdate = {
  'name': 'thommas'
}

describe('Test the users CRUD', () => {
  test('It should response the POST method', (done) => {
    request('localhost:5000')
      .post('/api/users')
      .send(mockUser)
      .then((response) => {
        // expect statusCode 201 - Created
        expect(response.statusCode).toBe(201)
        done()
      })
  })
  test('It should response the GET method', (done) => {
    request('localhost:5000')
      .get('/api/users')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
  test('It should response the PUT method', (done) => {
    request('localhost:5000')
      .put('/api/users')
      .send(mockUpdate)
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
  test('It should response the DELETE method', (done) => {
    request('localhost:5000').delete('/api/users').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})

testServer.close()
