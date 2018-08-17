import mongoose from 'mongoose'
import config from '../../../config/env.config'

mongoose.Promise = Promise

class DbConnection {
  constructor () {
    this.dbURI = config.dbURI
    this.DbConnection = mongoose.connect(this.dbURI, { useNewUrlParser: true })
  }
  start () {
    return Promise.resolve(mongoose.connect(this.dbURI, { useNewUrlParser: true }))
      .then(() => {
        console.log('\x1b[44m%s\x1b[0m', 'Successfully connected to database.')
      })
      .catch(err => {
        if (err.message.code === 'ETIMEDOUT') {
          console.log('Attempting to re-establish database connection.')
          return Promise.resolve(mongoose.connect(this.dbURI, { useNewUrlParser: true }))
        } else {
          console.log('Error while attempting to connect to database')
          console.log(err)
        }
      })
  }
  close () {
    mongoose.connection.close()
  }
}
export default DbConnection
