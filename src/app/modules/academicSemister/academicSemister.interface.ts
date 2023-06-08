import { Model } from 'mongoose';

export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemeterTitles = 'Autumn' | 'Summer' | 'Fall';

export type IAcademicSemeterCodes = '01' | '02' | '03';

export type IAcademisSemister = {
  title: IAcademicSemeterTitles;
  year: number;
  code: IAcademicSemeterCodes;
  startMonth: IAcademicSemesterMonth;
  endMonth: IAcademicSemesterMonth;
};

export type AcademicSemesterModel = Model<IAcademisSemister>;
