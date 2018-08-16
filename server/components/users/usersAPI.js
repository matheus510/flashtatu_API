import { Router } from 'express'
import UserController from './usersController'

const usersController = new UserController()
const usersRouter = Router()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', usersController.getUser)
usersRouter.put('/', usersController.editUser)
usersRouter.delete('/', usersController.deleteUser)

export default usersRouter
