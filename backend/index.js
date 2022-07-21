import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import routeAuth from "./routes/auth.js";
import routeUsers from "./routes/users.js";
import routeHotels from "./routes/hotels.js";
import routeRooms from "./routes/rooms.js";

dotenv.config({ path: "./.env" });
const app = express();
const PORT = 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8800/api",
    // headers: "",
    // preflightContinue: false,
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

//Routes
app.use("/api/auth", routeAuth);
app.use("/api/users", routeUsers);
app.use("/api/hotels", routeHotels);
app.use("/api/rooms", routeRooms);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running at port ${PORT}`);
});
