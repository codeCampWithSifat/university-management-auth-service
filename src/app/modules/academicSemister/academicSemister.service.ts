import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemister.constant';
import { IAcademisSemister } from './academicSemister.interface';
import { AcademicSemester } from './academicSemister.model';

const createSemester = async (
  payload: IAcademisSemister
): Promise<IAcademisSemister> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
