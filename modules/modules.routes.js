import express from 'express'
import { userRouter } from './users/users.routes.js'
import { postRouter } from './posts/posts.routes.js'

const modulesRouter = express.Router()

modulesRouter.use('/users', userRouter)
modulesRouter.use('/posts',postRouter)

export { modulesRouter }