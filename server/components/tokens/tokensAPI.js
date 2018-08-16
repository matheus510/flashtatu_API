import { Router } from 'express'
import TokenController from './tokensController'

const tokensController = new TokenController()
const tokensRouter = Router()

tokensRouter.post('/', tokensController.createToken)
tokensRouter.get('/', tokensController.getToken)
tokensRouter.put('/', tokensController.editToken)
tokensRouter.delete('/', tokensController.deleteToken)

export default tokensRouter
