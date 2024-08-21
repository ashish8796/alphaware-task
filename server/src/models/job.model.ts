import mongoose, { Schema } from "mongoose";

export interface IJob {
  companyName: string;
  position: string;
  contact: string;
  location: string;
  createdAt: Date;
  updateAt: Date;
}

const jobSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model<IJob>("Job", jobSchema);
export default Job;
