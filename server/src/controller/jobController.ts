import { Request, Response } from "express";
import { setResponseHeaders } from "../helper/responseHelper";
import Job from "../models/job.model";
import { applyJobByUser } from "./userController";

export const getJobs = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (error) {
    console.log("Error in getting jobs: ", error);
    res.status(400).send(error);
  }
};

// Admin Job related controller methods
export const addJob = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const { companyName, position, contact, location } = req.body;
    const job = await Job.create({ companyName, position, contact, location });
    res.status(201).send(job);
  } catch (error) {
    console.log("Error in adding job: ", error);
    res.status(400).send(error);
  }
};

export const updateJob = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const { companyName, position, contact, location } = req.body;
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id },
      { companyName, position, contact, location },
      { new: true }
    );
    res.status(200).send(job);
  } catch (error) {
    console.log("Error in updating job: ", error);
    res.status(400).send(error);
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  setResponseHeaders(res);

  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(job);
  } catch (error) {
    console.log("Error in deleting job: ", error);
    res.status(400).send(error);
  }
};

// User related controller methods
export const applyJob = async (req: Request, res: Response) => {
  setResponseHeaders(res);
  const { userId, jobId } = req.body;

  try {
    const user = await applyJobByUser(userId, jobId);
    res.status(200).send(user);
  } catch (error) {
    console.log("Error in applying job: ", error);
    res.status(400).send(error);
  }
};
