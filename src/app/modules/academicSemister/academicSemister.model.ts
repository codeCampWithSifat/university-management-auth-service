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
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

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

// handling Same Year && Same year issue
academisSemisterSchema.pre('save', async function (next) {
  const isExists = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester is already Exists'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademisSemister, AcademicSemesterModel>(
  'AcademicSemister',
  academisSemisterSchema
);
