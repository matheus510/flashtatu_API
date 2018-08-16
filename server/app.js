import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import users from './components/users'
import tokens from './components/tokens'
import tattoos from './components/tattoos'
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
    // Set users, tokens and tattoos routes
    app.use('/api/users', users.API)
    app.use('/api/tokens', tokens.API)
    app.use('/api/tattoos', tattoos.API)
  }
  start () {
    app.listen(5000, () => console.log('Listening at port 5000'))
  }
}

const server = new Server()

server.start()
