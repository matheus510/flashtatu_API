import User from './usersModel'
class UserDAL {
  // Insert User Database Interactor
  // Required:
  insertUser (reqUser) {
    const user = new User({ user: reqUser })
    try {
      let newUser = Promise.resolve(user.save())
      return newUser
    } catch (err) {
      return err
    }
  }
  // Get User Database Interactor
  // Required:
  getUser () {

  }

  // Edit User Database Interactor
  // Required:
  editUser () {

  }

  // Delete User Database Interactor
  // Required:
  deleteUser () {

  }
}

export default UserDAL
