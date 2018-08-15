import { Router } from 'express'
import tokensController from './tokensController'

const tokensRouter = Router()

tokensRouter.post('/', tokensController.createToken)
tokensRouter.get('/', tokensController.getToken)
tokensRouter.put('/', tokensController.editToken)
tokensRouter.delete('/', tokensController.deleteToken)

export default tokensRouter
