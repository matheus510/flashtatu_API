import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import users from './components/users'
import tokens from './components/tokens'
import tattoos from './components/tattoos'
import dbConnection from './db/dbConnection'

// Instantiate express server
const app = express()

// Set helmet on server
app.use(helmet())

// Set body parser
app.use(bodyParser.json())

// Stabilish connection with DB
app.use(dbConnection())

// Set users, tokens and tattoos routes
app.use('/api/users', users.API)
app.use('/api/tokens', tokens.API)
app.use('/api/tattoos', tattoos.API)

app.listen(5000, () => console.log('Listening at port 5000'))
