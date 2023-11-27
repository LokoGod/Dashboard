import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Importing custom routes
import categoryRouter from "./routes/categoryRoute.js";

// Instances
const app = express();

// Middlware
app.use(bodyParser.json())
app.use(cors());

// API Routing
app.use("/api/v1/categories", categoryRouter)

const port = process.env.PORT || 9000;

// Server spin-up
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();