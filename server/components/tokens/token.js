import tokensApi from './tokensAPI'
import tokensController from './tokensController'
import tokensDAL from './tokensDAL'
import tokensErrors from './tokensErrors'

// Centralize all tokens domain and export it
const token = {
  API: tokensApi,
  controller: tokensController,
  DAL: tokensDAL,
  errors: tokensErrors
}

export default token
