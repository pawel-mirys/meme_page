import { Request, Response, NextFunction } from 'express';

type AsyncFuntion = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncHandler = (fn: AsyncFuntion) => {
  (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next).catch(next));
  };
};

export default asyncHandler;
