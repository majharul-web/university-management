import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

async function bootstrap() {
  let server: Server;
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Connected to MongoDB');
    server = app.listen(config.port, () => {
      logger.info(`Server is listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Error connecting to MongoDB: ', error);
  }

  process.on('unhandledRejection', (error: Error) => {
    console.log('Unhandled Rejection is detected,server is closing', error);
    if (server) {
      server.close(() => {
        errorLogger.error('Server is closed due to unhandledRejection', error);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();
