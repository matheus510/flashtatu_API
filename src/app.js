import http from 'http'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import User from './components/users'
import Token from './components/tokens'
import Tattoo from './components/tattoos'
import Call from './components/calls'
import DbConnection from './components/util/db'

class Server {
  constructor () {
    // Instantiate express
    this.DBConnection = new DbConnection()
    this.initDB()
    this.app = express()
    this.server = http.createServer(this.app)
    this.initMiddleware()
    this.initRoutes()
  }

  initDB () {
    return this.DBConnection.start()
  }
  initMiddleware () {
    // Set helmet middleware
    this.app.use(helmet())

    // Set body parser middleware
    this.app.use(bodyParser.json())
  }
  initRoutes () {
    // Set users, tokens and tattoos instantiate entities
    const user = new User()
    const token = new Token()
    const tattoo = new Tattoo()
    const call = new Call()
    this.app.use('/api/users', user.API)
    this.app.use('/api/tokens', token.API)
    this.app.use('/api/tattoos', tattoo.API)
    this.app.use('/api/calls', call.API)
  }
  init () {
    this.app.listen(5000, () => {
      console.log('\x1b[45m%s\x1b[0m', 'Listening at port 5000')
    })
  }
  close () {
    this.app.removeAllListeners()

    this.DBConnection.close(() => {
      console.log('Mongoose connection disconnected')
    })      
  }
}

export default Server
