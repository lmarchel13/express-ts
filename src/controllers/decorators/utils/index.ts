import "reflect-metadata";
import { Request, Response, NextFunction, RequestHandler } from "express";

export function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return res.status(400).send("Invalid request");
    }

    for (const key of keys) {
      if (!req.body[key]) {
        return res.status(400).send(`${key.toUpperCase()} is missing`);
      }
    }

    next();
  };
}
