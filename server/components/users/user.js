import usersApi from './usersAPI'
import usersController from './usersController'
import usersDAL from './usersDAL'
import usersErrors from './usersErrors'

// Centralize all users domain and export it
const users = {
  API: usersApi,
  controller: usersController,
  DAL: usersDAL,
  errors: usersErrors
}

export default users
