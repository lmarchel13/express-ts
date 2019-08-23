import { Response, Request, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made!!!");
  next();
}
