import express from "express";
import morgan from "morgan";
import connectToDB from "./config/db.config";
import { port } from "./config/server.config";

const app = express();

// connect to database
connectToDB();

app.use(morgan("combined"));
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// DB_PASSWORD = urvY1hmnrV5Q3oYq
// DB_USERNAME = ashishsainiak
// PORT = 5500
// JWT_SECRET = "Thisisjwtsecret"
