import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

let server: Server;

process.on('uncaughtException', (error: Error) => {
  errorLogger.error(error);
  process.exit(1);
});

async function bootstrap() {
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

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  if (server) {
    server.close(() => {
      logger.info('Process terminated');
    });
  }
});
