import { Router } from 'express'
import tokensController from './tokensController'

const tokensRouter = Router()

tokensRouter.post('/tokens', tokensController.createTokens)
tokensRouter.get('/tokens', tokensController.getTokens)
tokensRouter.put('/tokens', tokensController.editTokens)
tokensRouter.delete('/tokens', tokensController.deleteTokens)

export default tokensRouter
