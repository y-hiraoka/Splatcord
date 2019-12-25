import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthService } from "../services";

export const auth = async (request: Request, response: Response) => {
  const code: string | undefined = request.query.code;

  if (!code) {
    // If a user canceled, code is undefined.
    response.redirect("/");
    return;
  }

  try {
    const authServide = container.resolve(AuthService);

    const userModel = await authServide.signInWithDiscord(code);

    response.render("./signIn.ejs", userModel);
  } catch (error) {
    console.error(error);
    response.status(500).send("Server Error.");
  }
};
