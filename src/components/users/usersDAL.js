import UserModel from './usersModel'

class UserDAL {
  // Insert User Database Interactor
  // Required:
  insertUser (reqUser) {
    // Instantiate mongoose model for further interaction
    const userInstance = new UserModel(reqUser)

    Promise.resolve(userInstance.save((err) => {
      if (err) {
        let responseObj = {
          status: 'false',
          insertedDoc: false
        }
        return responseObj
      } else {
        let responseObj = {
          status: 'success',
          insertedDoc: userInstance
        }
        return responseObj
      }
    }))
  }
  // Get User Database Interactor
  // Required:
  getUser (queryOptions) {
    const queryType = queryOptions.by
    const queryValues = queryOptions.values
    if (queryType === 'attr') {
      return Promise.resolve(UserModel.find(queryValues, (err, docs) => {
        if (err) throw new Error(err)

        return docs
      }))
    }
    if (queryType === 'id') {
      return Promise.resolve(UserModel.findById(queryValues.id))
    }
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
