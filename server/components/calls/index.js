import callsAPI from './callsAPI'
import callsController from './callsController'

class Call {
  constructor () {
    this.API = callsAPI
    this.controller = callsController
  }
}
export default Call
