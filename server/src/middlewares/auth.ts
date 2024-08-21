import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/app.config";
import { Request, Response } from "express";

export async function verifyToken(req: Request, res: Response, next: Function) {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token as string, jwtSecret as string) as {
      id: string;
    };

    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
