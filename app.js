import express from "express";
import cors from "cors";
import { responseMessage } from "./database.js";

// Initializing express
const app = express();

// Initializing the cors middleware
app.use(cors());

app.get("/api/v1/info", (req, res) => res.status(200).json(responseMessage));

export default app;
