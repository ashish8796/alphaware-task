import { Request, Response } from "express";
import { setResponseHeaders } from "../helper/responseHelper";
import User from "../models/user.model";

export const registerUser = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).send(user);
  } catch (error) {
    console.log("Error in registering user: ", error);
    res.status(400).send(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("jobs");

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    // verify password
    const isPasswordMatch = await user.verifyPassword(password);
    if (!isPasswordMatch) {
      return res.status(401).send("Invalid email or password");
    }

    // generate token
    const token = await user.generateToken();
    res.status(200).send({ user, token });
  } catch (error) {
    console.log("Error in login user: ", error);
    res.status(400).send(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const user = await User.findById(req.params.id).populate("jobs");
    res.status(200).send(user);
  } catch (error) {
    console.log("Error in getting user: ", error);
    res.status(400).send(error);
  }
};

export const applyJobByUser = async (userId: string, jobId: string) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // add job to user
    user.jobs?.push(jobId);
    return await user.save();
  } catch (error) {
    console.log("Error in applying job: ", error);
    throw error;
  }
};
