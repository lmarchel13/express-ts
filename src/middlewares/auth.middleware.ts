import { Request, Response, NextFunction } from "express";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403).send(`
    <h1 style="color: red">
        You are not allowed to access this path
    </h1>
  `);
};
