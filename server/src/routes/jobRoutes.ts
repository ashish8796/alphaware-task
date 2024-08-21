import express from "express";
import {
  addJob,
  deleteJob,
  getJobs,
  updateJob,
} from "../controller/jobController";
import { auth } from "../middlewares/auth";
import { admin } from "../middlewares/admin";

const jobRouter = express.Router();

jobRouter.get("/", getJobs);
jobRouter.post("/add", auth.verifyToken, admin.verifyAdmin, addJob);
jobRouter.put("/updateJob", auth.verifyToken, updateJob);
jobRouter.delete("/deleteJob", auth.verifyToken, deleteJob);

export default jobRouter;
