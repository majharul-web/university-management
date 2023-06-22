import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

// Routes
// app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes);
app.use('/api/v1/', routes);

// test error
app.get('/', async () => {
  // Promise.reject(new Error('Unhandled promise rejection'));
  // throw new ApiError(400, 'Something went wrong');
  // next('something went wrong');
  // throw new Error('Something went wrong');
});

// Error handler
app.use(globalErrorHandler);

// handle not found routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
  next();
});

export default app;
