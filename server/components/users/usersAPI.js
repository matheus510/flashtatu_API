import { Router } from 'express'
import usersController from './usersController'

const usersRouter = Router()

usersRouter.post('/users', usersController.createUser)
usersRouter.get('/users', usersController.getUser)
usersRouter.put('/users', usersController.editUser)
usersRouter.delete('/users', usersController.deleteUser)

export default usersRouter
