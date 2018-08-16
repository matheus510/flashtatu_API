import UserModel from './usersModel'

class UserDAL {
  // Insert User Database Interactor
  // Required:
  insertUser (reqUser) {
    console.log(reqUser)
    const userInstance = new UserModel(reqUser)

    try {
      let newUser = Promise.resolve(userInstance.save())
      let responseObj = {
        status: 'success',
        insertedDoc: newUser
      }
      return responseObj
    } catch (err) {
      let responseObj = {
        status: 'false',
        insertedDoc: false
      }
      return responseObj
    }
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
