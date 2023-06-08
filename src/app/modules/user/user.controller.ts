import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../errors/sendResponse';
import httpStatus from 'http-status';
// import { z } from 'zod';

const createdUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    next();

    // res.status(200).json({
    //   success: true,
    //   message: 'User Created Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  }
);

export const UserController = {
  createdUser,
};
