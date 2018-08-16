import { Router } from 'express'
import CallController from './callsController'

const callsController = new CallController()
const callsRouter = Router()

callsRouter.post('/webhook', callsController.processCall)

export default callsRouter
