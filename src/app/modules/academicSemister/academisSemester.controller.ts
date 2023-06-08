import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemister.service';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../errors/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();
    // res.status(200).json({
    //   success: true,
    //   message: 'Academic Semester Created Successfully',
    //   data: result,
    // });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Created Successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
