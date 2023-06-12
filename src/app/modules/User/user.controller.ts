import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import catchAsync from '../../../shared/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.createUser(user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });
});

export const UserController = {
  createUser,
};
