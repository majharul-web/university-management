import { Request, Response } from 'express';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ManagementDepartmentService } from './managementDepartment.service';
import { IManagementDepartment } from './managementDepartment.interface';
import { managementDepartmentFilterableFields } from './managementDepartment.constant';
import { paginationField } from '../../../constants/paginations';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...managementDepartmentData } = req.body;
  const result = await ManagementDepartmentService.createDepartment(
    managementDepartmentData
  );

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department created successfully',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, managementDepartmentFilterableFields);
  const paginationOptions = pick(req.query, paginationField);

  const result = await ManagementDepartmentService.getAllDepartments(
    filters,
    paginationOptions
  );

  sendResponse<IManagementDepartment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management departments fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ManagementDepartmentService.getSingleDepartment(id);

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department fetched successfully',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ManagementDepartmentService.updateDepartment(
    id,
    req.body
  );

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department updated successfully',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ManagementDepartmentService.deleteDepartment(id);

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department deleted successfully',
    data: result,
  });
});

export const ManagementDepartmentController = {
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
  createDepartment,
};
