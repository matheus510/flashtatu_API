import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  organization: {
    type: Array,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  professional: {
    type: Boolean,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('User', userSchema)

export default userModel
