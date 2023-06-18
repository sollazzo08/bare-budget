import { NextFunction } from "express";

//TODO Replace 'any' with proper types
const errorTypes: any = {
  ValidationError: 422,
  UniqueViolationError: 409,
};

const errorMessages: any = {
  UniqueViolationError: 'Already exists.',
};

export function notFound(req: any, res: any, next: NextFunction) {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(error: any, req: any, res: any) {
  const statusCode = res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: errorMessages[error.name] || error.message,
    stack: error.stack,
    errors: error.errors || undefined,
  });
}
