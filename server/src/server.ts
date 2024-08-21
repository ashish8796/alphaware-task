import express from "express";
import morgan from "morgan";
import connectToDB from "./config/db.config";
import { port } from "./config/server.config";
import userRouter from "./routes/userRoutes";
import jobRouter from "./routes/jobRoutes";

const app = express();

// connect to database
connectToDB();

app.use(morgan("combined"));
app.use(express.json());

// routes
app.use("/api/users", userRouter);
app.use("api/jobs", jobRouter);
app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
