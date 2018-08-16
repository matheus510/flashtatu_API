import tokensApi from './tokensAPI'
import tokensController from './tokensController'
import tokensDAL from './tokensDAL'

class Token {
  constructor () {
    this.API = tokensApi
    this.controller = tokensController
    this.DAL = tokensDAL
  }
}

export default Token
