import express from "express";
import { getUser, loginUser, registerUser } from "../controller/userController";
import { auth } from "../middlewares/auth";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", auth.verifyToken, getUser);

export default userRouter;
