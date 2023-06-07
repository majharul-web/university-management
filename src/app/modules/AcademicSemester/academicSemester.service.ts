import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';
import ApiError from '../../../errors/ApiError';
import { AcademicSemesterTitleCodeMapper } from './academicSemester.constant';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (AcademicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  } else {
    const result = await AcademicSemester.create(payload);
    return result;
  }
};

export const AcademicSemesterService = {
  createSemester,
};
