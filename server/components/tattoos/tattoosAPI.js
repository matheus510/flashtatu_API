import { Router } from 'express'
import tattoosController from './tattoosController'

const tattoosRouter = Router()

tattoosRouter.post('/tattoos', tattoosController.createTattoo)
tattoosRouter.get('/tattoos', tattoosController.getTattoo)
tattoosRouter.put('/tattoos', tattoosController.editTattoo)
tattoosRouter.delete('/tattoos', tattoosController.deleteTattoo)

export default tattoosRouter
