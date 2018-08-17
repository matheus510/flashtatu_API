import User from '../users'

class CallController {
  // Get Tattoo
  // Required:
  processCall (req, res) {
    console.log(req.body)
    const receivedCall = req.body
    const customerPhone = receivedCall.their_number
    const callId = receivedCall.call_id
    const userInstance = new User()
    const UserDAL = userInstance.DAL
    const user = new UserDAL()

    const queryObj = {
      by: 'attr',
      values: {
        phone: customerPhone
      }
    }
    let query = user.getUser(queryObj)

    // Resolve the query results then send it as response
    Promise.resolve(query).then(queryResult => {
      if (typeof queryResult !== 'undefined' && queryResult.length > 0) {
        console.log(`Already registered as ${queryResult[0].name} delegating to 901`)
        const existingUserDelegation = {
          'type': 'delegate',
          'call_id': callId,
          'destination': '*2901'
        }

        res.send(existingUserDelegation)
      } else {
        // MOCKED NEW USER
        const newUser = {
          'name': 'john',
          'email': 'john@gmail.com',
          'gender': 'male',
          'professional': false,
          'phone': queryObj.values.phone
        }
        //
        let insertion = user.insertUser(newUser)
        // Resolve db interaction result
        Promise.resolve(insertion).then((insertionResult) => {
          if (insertionResult.status !== 'success') console.log(insertionResult)
          console.log(insertionResult)
          const newUserDelegation = {
            'type': 'delegate',
            'call_id': callId,
            'destination': '*2900'
          }
          res.send(newUserDelegation)
        })
      }
    })
  }
}

export default CallController
