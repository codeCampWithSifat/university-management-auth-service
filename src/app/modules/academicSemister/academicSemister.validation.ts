import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonth,
} from './academicSemister.constant';
import { academicSemesterTitles } from './academicSemister.constant';

const createAcademisSemisterZodSehema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is Rquired',
    }),
    year: z.number({
      required_error: 'Year Is Required',
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is Required',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start Month Is Required',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'End Month Is Required',
    }),
  }),
});

export const AcademicSemisterValidation = {
  createAcademisSemisterZodSehema,
};
