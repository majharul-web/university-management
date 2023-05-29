import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Connected to MongoDB')
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error)
  }
}

bootstrap()
