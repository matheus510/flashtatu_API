import UserDAL from './usersDAL'

const userDAL = new UserDAL()
class UserController {
  // Create User
  // Required: userName and hashedPassword
  createUser (req, res) {
    let reqUser = req.body

    // Wait for User to be successfully created and then return the User
    Promise.resolve(userDAL.insertUser(reqUser)).then((newUser) => {
      // Send result
      res.status(201).send(JSON.stringify(newUser))
    })
  }
  // Get User
  // Required:
  getUser (req, res) {
    res.send('200')
  }
  // Edit User
  // Required:
  editUser (req, res) {
    res.send('200')
  }
  // Delete User
  // Required:
  deleteUser (req, res) {
    res.send('200')
  }
}

export default UserController
