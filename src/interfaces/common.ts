import { IGenericErrorMessage } from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export type IGenericResponse<T> = {
  meta: {
    total: number;
    page: number;
    limit: number;
  };
  data: T;
};
