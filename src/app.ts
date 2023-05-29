import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/User/user.route';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
