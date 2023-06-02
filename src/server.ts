import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger, errorLogger } from './share/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Application Listening on port ${config.port}`)
    })
    logger.info('Database connected Successfully')
  } catch (err) {
    errorLogger.error('Database Error', err)
  }
}
main()
