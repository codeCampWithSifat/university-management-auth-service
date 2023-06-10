import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemisterValidation } from './academicSemister.validation';
import { AcademicSemesterController } from './academisSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemisterValidation.createAcademisSemisterZodSehema),
  AcademicSemesterController.createSemester
);

router.get('/', AcademicSemesterController.getAllSemester);

export const AcademicSemesterRoutes = router;
