import { form } from "../utils/html";
import { Request, Response } from "express";
import { Controller, Get, Post, BodyValidator } from "./decorators";

@Controller("/auth")
export class AuthController {
  @Get("/login")
  getLogin(req: Request, res: Response) {
    res.send(form);
  }

  @Post("/login")
  @BodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log("email :", email);
    console.log("password :", password);

    if (email === "lucas@email.com" && password === "123") {
      req.session = { loggedIn: true };
      res.redirect("/");
    }

    res.send(
      `<div><h1>Invalid email and/or password!</h1><a href="/login">Login</a></div>`
    );
  }

  @Get("/logout")
  getLogout(req: Request, res: Response) {
    if (req.session) {
      req.session = undefined;
      res.redirect("/");
    }
  }
}
