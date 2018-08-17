import UserModel from './usersModel'

class UserDAL {
  // Insert User Database Interactor
  // Required:
  insertUser (reqUser) {
    // Instantiate mongoose model for further interaction
    const userInstance = new UserModel(reqUser)

    return Promise.resolve(userInstance.save()).then((docs, err) => {
      if (err) {
        console.log(err)
        let responseObj = {
          status: 'false',
          insertedDoc: false
        }
        return responseObj
      } else {
        console.log('added: ' + docs)
        let responseObj = {
          status: 'success',
          insertedDoc: docs
        }
        return responseObj
      }
    })
  }
  // Get User Database Interactor
  // Required:
  getUser (queryOptions) {
    const queryType = queryOptions.by
    const queryValues = queryOptions.values
    if (queryType === 'attr') {
      return Promise.resolve(UserModel.find(queryValues, (err, result) => {
        if (err) throw new Error(err)

        return result
      }))
    }
    if (queryType === 'id') {
      return Promise.resolve(UserModel.findById(queryValues.id, (err, result) => {
        if (err) throw new Error(err)

        return result
      }))
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
