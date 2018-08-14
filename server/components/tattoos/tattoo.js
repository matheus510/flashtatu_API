import tattoosApi from './tattoosAPI'
import tattoosController from './tattoosController'
import tattoosDAL from './tattoosDAL'
import tattoosErrors from './tattoosErrors'

// Centralize all tattoos domain and export it
const tattoo = {
  API: tattoosApi,
  controller: tattoosController,
  DAL: tattoosDAL,
  errors: tattoosErrors
}

export default tattoo
