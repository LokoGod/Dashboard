import express from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getTask)
taskRouter.post("/", taskController.createTask);

export default taskRouter;
