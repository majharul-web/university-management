import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/User/user.route';
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/v1/users', UserRoutes);

// test error
app.get('/', async () => {
  // Promise.reject(new Error('Unhandled promise rejection'));
  // throw new ApiError(400, 'Something went wrong');
  // next('something went wrong');
  // throw new Error('Something went wrong');
});

// Error handler
app.use(globalErrorHandler);

export default app;
