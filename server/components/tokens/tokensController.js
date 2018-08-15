import tokensDAL from './tokensDAL'

// Create Token Controller
// Required: userName and hashedPassword
async function createToken (req, res) {
  let reqToken = `${req.body.userName}:${req.body.hashedPassword}`
  // Wait for token to be successfully created and then return the token
  let newToken = await tokensDAL.createToken(reqToken)
  
  res.status(201).send(JSON.stringify(newToken))
}


// Get Token Controller
// Required: 
function getToken (req, res) {
  let token = req.get('Authorization')
  res.send(token ? token : '200')
}

// Edit Token Controller
// Required:
function editToken (req, res) {
  res.send('200')
}

// Delete Token Controller
// Required:
function deleteToken (req, res) {
  res.send('200')
}

export default {
  createToken,
  getToken,
  editToken,
  deleteToken
}
