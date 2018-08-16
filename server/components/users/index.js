import usersApi from './usersAPI'
import usersController from './usersController'
import usersDAL from './usersDAL'

class User {
  constructor () {
    this.API = usersApi
    this.controller = usersController
    this.DAL = usersDAL
  }
}
export default User
