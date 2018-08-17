import request from 'supertest'
import Server from '../src/app'

const serverInstance = new Server()

let serverListening = serverInstance.app.listen(5000)
serverInstance.initDB()

let mockPhoneNumber = Math.floor(100000000 + Math.random() * 900000000)

const mockCall = {
  'type': 'call.standby',
  'call_id': '1463669263.30033',
  'code': '123456',
  'direction': 'inbound',
  'our_number': '0800000000',
  'their_number': mockPhoneNumber.toString(),
  'timestamp': '2017-01-01T00:00:00Z'
}

describe('Test the calls methods ', () => {
  afterAll(() => {
    serverListening.close()
  })
  test('It should receive the call, register and delegate new user', (done) => {
    request('localhost:5000')
      .post('/api/calls/webhook')
      .send(mockCall)
      .then((response) => {
        // Parse response
        let parsedResponse = JSON.parse(response.text)
        // Expect it is delegated to 'new customer queue'
        expect(parsedResponse.destination).toBe('*2900')
        done()
      })
  })
  test('It should receive the call and delegate registered user', (done) => {
    request('localhost:5000')
      .post('/api/calls/webhook')
      .send(mockCall)
      .then((response) => {
        // Parse response
        let parsedResponse = JSON.parse(response.text)
        // Expect it is delegated to 'registered customer queue'
        expect(parsedResponse.destination).toBe('*2901')
        done()
      })
  }, 10000)
})
