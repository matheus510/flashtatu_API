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
      return Promise.resolve(UserModel.findById(queryValues.id)).then((err, result) => {
        if (err) console.log(err)
        return result
      }).catch(() => {
        let response = 'No user found with provided ID'

        return response
      })
    }
  }

  // Edit User Database Interactor
  // Required:
  editUser (updateObj) {
    console.log(updateObj)
    // Instantiate mongoose model for further interaction
    return Promise.resolve(UserModel.findById(updateObj.userID)).then((userDoc, err) => {
      if (err) {
        console.log(err)
        return err
      } else {
        return Promise.resolve(UserModel.findOneAndUpdate(updateObj.userID, updateObj.userUpdate, {returnNewDocument: true})).then(updatedUser => {
          if (err) throw new Error(err)

          return updatedUser
        })
      }
    })
  }

  // Delete User Database Interactor
  // Required:
  deleteUser () {

  }
}

export default UserDAL
