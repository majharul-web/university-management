import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../AcademicFaculty/academicFaculty.interface';
import { IAcademicDepartment } from '../AcademicDepartment/academicDepartment.interface';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IFaculty = {
  id: string;
  name: UserName; //embedded object
  dateOfBirth: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  designation: string;
  academicDepartment: Types.ObjectId | IAcademicDepartment; // // reference _id
  academicFaculty: Types.ObjectId | IAcademicFaculty; // reference _id
  profileImage?: string;
};

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;

export type IFacultyFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
