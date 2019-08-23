import { loggedIn, notLoggedIn } from "../utils/html";
import { Request, Response } from "express";
import { Controller, Get, Use } from "./decorators";
import { requireAuth } from "../middlewares";

@Controller("")
export class AppController {
  @Get("/")
  index(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      return res.send(loggedIn);
    }
    res.send(notLoggedIn);
  }

  @Get("/protected")
  @Use(requireAuth)
  protected(req: Request, res: Response) {
    res.send("<h1>PROTECTED PART OF THE SYSTEM!!!!</h1>");
  }
}
