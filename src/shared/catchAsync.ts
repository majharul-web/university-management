import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync =
  (fn: RequestHandler) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catchAsync;
