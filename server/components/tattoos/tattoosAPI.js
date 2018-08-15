import { Router } from 'express'
import tattoosController from './tattoosController'

const tattoosRouter = Router()

tattoosRouter.post('/', tattoosController.createTattoo)
tattoosRouter.get('/', tattoosController.getTattoo)
tattoosRouter.put('/', tattoosController.editTattoo)
tattoosRouter.delete('/', tattoosController.deleteTattoo)

export default tattoosRouter
