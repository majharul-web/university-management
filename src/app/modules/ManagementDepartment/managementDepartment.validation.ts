import { z } from 'zod';

const createManagementZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

const updateManagementZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const ManagementDepartmentValidation = {
  createManagementZodSchema,
  updateManagementZodSchema,
};
