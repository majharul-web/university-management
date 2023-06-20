import { Schema, model } from 'mongoose';
import {
  ManagementDepartmentModel,
  IManagementDepartment,
} from './managementDepartment.interface';

const ManagementDepartmentSchema = new Schema<IManagementDepartment>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const ManagementDepartment = model<
  IManagementDepartment,
  ManagementDepartmentModel
>('ManagementDepartment', ManagementDepartmentSchema);
