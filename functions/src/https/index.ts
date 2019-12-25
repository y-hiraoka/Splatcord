import * as express from "express";
import { auth } from "./auth";

const app = express();
app.set("view engine", "ejs");

app.get("/auth", auth);

export default app;