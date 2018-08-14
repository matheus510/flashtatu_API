import { MongoClient } from 'mongodb'
import assert from 'assert'

// For the moment I will not hide the credentials so others can test without having to share some secret config file.
// Connection URL
const url = 'mongodb://flashtatu_developer:@Flash1!@ds219672.mlab.com:19672/flashtatu_dev'

// Use connect method to connect to the server
const dbConnection = MongoClient.connect(url, (err, client) => {
  assert.equal(null, err)

  console.log('Connected successfully to server')

  client.close()
})

export default dbConnection
