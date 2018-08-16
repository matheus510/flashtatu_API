import tattoosApi from './tattoosAPI'
import tattoosController from './tattoosController'
import tattoosDAL from './tattoosDAL'

// Centralize all tattoos domain and export it
const tattoo = {
  API: tattoosApi,
  controller: tattoosController,
  DAL: tattoosDAL
}

export default tattoo
