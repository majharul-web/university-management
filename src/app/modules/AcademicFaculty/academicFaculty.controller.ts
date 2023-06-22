import { Response, Request } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicFaculty } from './academicFaculty.interface';
import pick from '../../../shared/pick';
import { paginationField } from '../../../constants/paginations';
import { academicFacultyFilterableFields } from './academicFaculty.constant';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicFacultyData } = req.body;
    const result = await AcademicFacultyService.createAcademicFaculty(
      academicFacultyData
    );

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty created successfully!',
      data: result,
    });
  }
);

const getAllAcademicFaculties = catchAsync(
  async (req: Request, res: Response) => {
    console.log('req.headers', req.headers.authorization);
    console.log('req.', req.user);
    const filterOptions = pick(req.query, academicFacultyFilterableFields);
    const paginationOptions = pick(req.query, paginationField);

    const result = await AcademicFacultyService.getAllAcademicFaculties(
      filterOptions,
      paginationOptions
    );

    sendResponse<IAcademicFaculty[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getAcademicFacultyById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.getSingleAcademicFaculty(id);

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty retrieved successfully!',
      data: result,
    });
  }
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...academicFacultyData } = req.body;
    const result = await AcademicFacultyService.updateAcademicFaculty(
      id,
      academicFacultyData
    );

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty updated successfully!',
      data: result,
    });
  }
);

const deleteAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.deleteAcademicFaculty(id);

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty deleted successfully',
      data: result,
    });
  }
);

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getAcademicFacultyById,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};
