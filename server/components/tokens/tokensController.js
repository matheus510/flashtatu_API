import TokenDAL from './tokensDAL'

const tokensDAL = new TokenDAL()

class TokenController {
  // Create Token
  // Required: userName and hashedPassword
  createToken (req, res) {
    let reqToken = `${req.body.userName}:${req.body.hashedPassword}`

    // Wait for token to be successfully created and then return the token
    tokensDAL.insertToken(reqToken).then((newToken) => {
      // Send result
      res.status(201).send(JSON.stringify(newToken))
    })
  }

  // Get Token
  // Required:
  getToken (req, res) {
    let token = req.get('Authorization')
    res.send(token || '200')
  }

  // Edit Token
  // Required:
  editToken (req, res) {
    res.send('200')
  }

  // Delete Token
  // Required:
  deleteToken (req, res) {
    res.send('200')
  }
}

export default TokenController
