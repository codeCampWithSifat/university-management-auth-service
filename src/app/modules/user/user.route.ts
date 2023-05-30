import express from 'express'
import createdUser from './user.controller'

const router = express.Router()

router.post('/create-user', createdUser.createdUser)

export default router
