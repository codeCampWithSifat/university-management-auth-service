import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import { UserRoutes } from './app/modules/user/user.route';
// import { AcademicSemesterRoutes } from './app/modules/academicSemister/academicSemister.route';
import routes from './app/routes';
import httpStatus from 'http-status';
// import ApiError from './errors/ApiError'
const app: Application = express();

// use all the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use index.ts router
app.use('/api/v1/', routes);

// all of the Application Route
// app.use('/api/v1/users', UserRoutes);

// // semester route
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// global Error Handler
app.use(globalErrorHandler);

// handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        messgae: 'Api Not Found',
      },
    ],
  });
  next();
});

export default app;
