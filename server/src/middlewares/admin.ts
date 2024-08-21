import { Request, Response } from "express";

async function verifyAdmin(req: Request, res: Response, next: Function) {
  next();
}
export const admin = { verifyAdmin };
