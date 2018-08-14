import { Router } from 'express'

const tattoosRouter = Router()

tattoosRouter.post('/tattoos', createTattoo)
tattoosRouter.get('/tattoos', getTattoo)
tattoosRouter.put('/tattoos', editTattoo)
tattoosRouter.delete('/tattoos', deleteTattoo)

export default tattoosRouter
