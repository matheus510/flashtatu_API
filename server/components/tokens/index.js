import tokensApi from './tokensAPI'
import tokensController from './tokensController'
import tokensDAL from './tokensDAL'

// Centralize all tokens domain and export it
const token = {
  API: tokensApi,
  controller: tokensController,
  DAL: tokensDAL
}

export default token
