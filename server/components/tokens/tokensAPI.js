import { Router } from 'express'
import tokensController from './tokensController'

const tokensRouter = Router()

tokensRouter.post('/tokens', tokensController.createToken)
tokensRouter.get('/tokens', tokensController.getToken)
tokensRouter.put('/tokens', tokensController.editToken)
tokensRouter.delete('/tokens', tokensController.deleteToken)

export default tokensRouter
