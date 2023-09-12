import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../types/customErrorType';
export const errorHandlingMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).send({ message: err.message });
};
