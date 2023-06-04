import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/User/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

// test error
/* app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(400, 'Something went wrong');
  next('something went wrong');
  throw new Error('Something went wrong');
}); */

// Error handler
app.use(globalErrorHandler);

export default app;
