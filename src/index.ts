import express, { Router } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { RouterSingleton } from "./singletons/Router";

import "./controllers";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["SECRET_KEY"] }));
app.use(RouterSingleton.getInstance());

app.listen(PORT, () => {
  console.log("Server running on port 3000...");
});
