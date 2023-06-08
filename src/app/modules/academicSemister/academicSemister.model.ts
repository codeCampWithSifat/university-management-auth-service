import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademisSemister,
} from './academicSemister.interface';
import {
  academicSemesterCodes,
  academicSemesterMonth,
  academicSemesterTitles,
} from './academicSemister.constant';

// const Months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

const academisSemisterSchema = new Schema<IAcademisSemister>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  { timestamps: true }
);

export const AcademicSemester = model<IAcademisSemister, AcademicSemesterModel>(
  'AcademicSemister',
  academisSemisterSchema
);
