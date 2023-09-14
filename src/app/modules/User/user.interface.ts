/* eslint-disable no-unused-vars */

import { Model, Types } from 'mongoose';
import { IStudent } from '../Student/student.interface';
import { IFaculty } from '../Faculty/faculty.interface';
import { IAdmin } from '../Admin/admin.interface';

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: true | false;
  passwordChangedAt?: Date;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

// export type IUerMethods = {
//   isUerExist: (id: string) => Promise<Partial<IUser | null>>;
//   isPasswordMatched: (
//     givenPassword: string,
//     savePassword: string
//   ) => Promise<boolean>;
// };

// export type UserModel = Model<IUser, Record<string, unknown>, IUerMethods>;

export type UserModel = {
  isUserExist: (
    id: string
  ) => Promise<Pick<IUser, 'id' | 'password' | 'needsPasswordChange' | 'role'>>;
  isPasswordMatched: (
    givenPassword: string,
    savePassword: string
  ) => Promise<boolean>;
} & Model<IUser>;
