import mongoose from 'mongoose'

const tattooSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
})

const tattooModel = mongoose.model('Tattoo', tattooSchema)

export default tattooModel
