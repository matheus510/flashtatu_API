import tattoosApi from './tattoosAPI'
import tattoosController from './tattoosController'
import tattoosDAL from './tattoosDAL'

class Tattoo {
  constructor () {
    this.API = tattoosApi
    this.controller = tattoosController
    this.DAL = tattoosDAL
  }
}

export default Tattoo
