import dotenv from "dotenv";
dotenv.config();

export const jwtSecret = process.env.JWT_SECRET;
export const adminEmailDomain = process.env.ADMIN_EMAIL_DOMAIN;
