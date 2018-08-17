import querystring from 'querystring'
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
    // Parse query string and create query obj
    const parsedQuerystring = querystring.parse((req.url.slice(2, req.url.length)))
    let queryObj = {
      by: parsedQuerystring['by']
    }
    delete parsedQuerystring.by
    queryObj.values = parsedQuerystring

    Promise.resolve(userDAL.getUser(queryObj)).then(queryResults => {
      res.send(queryResults)
    })
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
