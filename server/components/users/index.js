import usersApi from './usersAPI'
import usersController from './usersController'
import usersDAL from './usersDAL'

// Centralize all users domain and export it
const users = {
  API: usersApi,
  controller: usersController,
  DAL: usersDAL
}

export default users
