import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
// import ApiError from './errors/ApiError'
const app: Application = express()

// use all the middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// test api
// app.get('/', (req, res, next) => {
//   throw new ApiError(400, 'Allah Is Almighty')
// })
// app.get('/', async (req, res, next) => {
//   //   Promise.reject(new Error('Unhandled Promised Rejection')
//   console.log(x)
// })

// all of the Application Route
app.use('/api/v1/users', UserRoutes)

// global Error Handler
app.use(globalErrorHandler)

export default app
