import mongoose from 'mongoose'

import logger from '../logger'

mongoose.Promise = global.Promise

// For the moment I will not hide the credentials so others can test without having to share some secret config file.
// DB connection URI
const dbURI = 'mongodb://flasht_dev:Flash1*@ds219672.mlab.com:19672/flashtatu_dev'

const connection = mongoose.connect(dbURI)

connection
  .then(db => {
    logger.info(
      `Successfully connected to ${dbURI} MongoDB cluster in development mode.`
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
