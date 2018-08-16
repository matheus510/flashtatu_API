import Token from './tokensModel'

class TokenDAL {
  // Insert Token Database Interactor
  // Required:
  insertToken (reqToken) {
    const token = new Token({ token: reqToken, expires: Date.now() })
    try {
      // Save new token on DB
      let newToken = Promise.resolve(token.save())
      return newToken
    } catch (err) {
      // Throw error
      throw new Error(err)
    }
  }
  // Get Token Database Interactor
  // Required:
  getToken () {

  }
  // Edit Token Database Interactor
  // Required:
  editToken () {

  }
  // Delete Token Database Interactor
  // Required:
  deleteToken () {

  }
}

export default TokenDAL
