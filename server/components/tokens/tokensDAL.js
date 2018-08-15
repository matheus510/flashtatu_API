import Token from './tokensModel'

// Create Token Database Interactor
// Required:
async function createToken (reqToken) {
  const token = new Token({ token: reqToken, expires: Date.now() })
  try {
    let newToken = await token.save()

    return newToken

  } catch (err){
    return err
  }

}

// Get Token Database Interactor
// Required:
function getToken () {

}

// Edit Token Database Interactor
// Required:
function editToken () {

}

// Delete Token Database Interactor
// Required:
function deleteToken () {

}

export default {
  createToken,
  getToken,
  editToken,
  deleteToken
}
