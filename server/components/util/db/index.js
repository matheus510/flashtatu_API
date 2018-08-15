import mongoose from 'mongoose'

import logger from '../logger'
import config from '../../../config/env.config'

mongoose.Promise = global.Promise

// DB connection URI
const dbURI = config.dbURI

const connection = mongoose.connect(dbURI)

connection
  .then(db => {
    logger.info(
      `Successfully connected to DB.`
    )
    return db
  })
  .catch(err => {
    if (err.message.code === 'ETIMEDOUT') {
      logger.info('Attempting to re-establish database connection.')
      mongoose.connect(dbURI)
    } else {
      logger.error('Error while attempting to connect to database:')
      logger.error(err)
    }
  })

export default connection
