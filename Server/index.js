import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Instances
const app = express();

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