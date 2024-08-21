import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/app.config";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  jobs?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobs: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// hooks
userSchema.pre("save", hashPassword);

// user related methods
userSchema.methods.generateToken = generateToken;
userSchema.methods.verifyPassword = verifyPassword;

async function hashPassword(this: IUser, next: Function) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
}

async function generateToken(this: IUser) {
  try {
    const payload = { email: this.email, userId: this._id };
    return await jwt.sign(payload, jwtSecret as string, {
      expiresIn: "5 mins",
    });
  } catch (error) {
    console.log("Error generating token: ", error);
    throw error;
  }
}

async function verifyPassword(this: IUser, password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log("Error in verifying password: ", error);
    throw error;
  }
}

export default mongoose.model("User", userSchema);
