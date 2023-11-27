import express from "express";
import categoryController from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getCategory);

export default categoryRouter;
