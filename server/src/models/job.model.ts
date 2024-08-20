import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Job", jobSchema);
