import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  expires: {
    type: Date,
    required: true
  }
})

const tokenModel = mongoose.model('Token', tokenSchema)

export default tokenModel
