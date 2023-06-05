import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger, errorLogger } from './share/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      logger.info(`Application Listening on port ${config.port}`)
    })
    logger.info('Database connected Successfully')
  } catch (err) {
    errorLogger.error('Database Error', err)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection Is Detected')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()

process.on('SIGTERM', () => {
  logger.info('SIGTREM is received')
  if (server) {
    server.close()
  }
})
