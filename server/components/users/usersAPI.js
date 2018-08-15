import { Router } from 'express'
import usersController from './usersController'

const usersRouter = Router()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', usersController.getUser)
usersRouter.put('/', usersController.editUser)
usersRouter.delete('/', usersController.deleteUser)

export default usersRouter
