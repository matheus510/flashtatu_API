import mongoose from 'mongoose'
import config from '../../../config/env.config'

class DbConnection {
  constructor () {
    this.dbURI = config.dbURI
  }
  start () {
    mongoose.connect(this.dbURI)
      .then(() => {
        console.log('Successfully connected to DB.')
      })
      .catch(err => {
        if (err.message.code === 'ETIMEDOUT') {
          console.log('Attempting to re-establish database connection.')
          mongoose.connect(this.dbURI)
        } else {
          console.log('Error while attempting to connect to database')
          console.log(err)
        }
      })
  }
}
export default DbConnection
