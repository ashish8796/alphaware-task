import { Request, Response } from "express";
import { adminEmailDomain } from "../config/app.config";

async function verifyAdmin(req: Request, res: Response, next: Function) {
  try {
    const email = req.email;
    if (email?.includes(adminEmailDomain as string)) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.log("Error in verifying admin: ", error);
    res.status(400).send(error);
  }

  next();
}
export const admin = { verifyAdmin };
