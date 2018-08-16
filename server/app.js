import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import User from './components/users'
import Token from './components/tokens'
import Tattoo from './components/tattoos'
import DbConnection from './components/util/db'

// Instantiate express
const app = express()

class Server {
  constructor () {
    this.initDB()
    this.initMiddleware()
    this.initRoutes()
  }
  initDB () {
    const connection = new DbConnection()
    connection.start()
  }
  initMiddleware () {
    // Set helmet middleware
    app.use(helmet())

    // Set body parser middleware
    app.use(bodyParser.json())
  }
  initRoutes () {
    // Set users, tokens and tattoos instantiate entities
    const user = new User()
    const token = new Token()
    const tattoo = new Tattoo()
    app.use('/api/users', user.API)
    app.use('/api/tokens', token.API)
    app.use('/api/tattoos', tattoo.API)
  }
  start () {
    app.listen(5000, () => console.log('\x1b[44m%s\x1b[0m', 'Listening at port 5000'))
  }
}

const server = new Server()
server.start()
