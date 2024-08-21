import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const dbPassword = process.env.DB_PASSWORD;
const dbUsername = process.env.DB_USERNAME;

export default async function connectToDB() {
  try {
    console.log("Connecting to DB...");
    const connection = mongoose.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.ktfxx.mongodb.net/alphaware?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}
