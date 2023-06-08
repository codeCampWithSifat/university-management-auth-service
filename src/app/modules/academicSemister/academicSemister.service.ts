import { IAcademisSemister } from './academicSemister.interface';
import { AcademicSemester } from './academicSemister.model';

const createSemester = async (
  payload: IAcademisSemister
): Promise<IAcademisSemister> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
