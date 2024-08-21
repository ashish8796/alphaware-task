import { Response } from "express";

export function setResponseHeaders(res: Response, options = {}) {
  res.setHeader("Content-Type", "application/json");
}
