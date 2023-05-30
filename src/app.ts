import express, { Application, Request, Response } from 'express'
import cors from 'cors'
//import userService from './app/modules/user/user.service'
import router from './app/modules/user/user.route'
const app: Application = express()

// use all the middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// all of the Application Route
app.use('/api/v1/users', router)

// testing route
app.get('/', async (req: Request, res: Response) => {
  // await userService.createUser({
  //   id: '9999',
  //   role: 'student',
  //   password: '1234',
  // })
  res.send('University Management Project')
})

export default app
