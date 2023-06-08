import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemister/academicSemister.route';
// import ApiError from './errors/ApiError'
const app: Application = express();

// use all the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all of the Application Route
app.use('/api/v1/users', UserRoutes);

// semester route
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// global Error Handler
app.use(globalErrorHandler);

export default app;
