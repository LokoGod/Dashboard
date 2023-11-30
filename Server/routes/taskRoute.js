import express from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getTask)
taskRouter.post("/", taskController.createTask);
taskRouter.delete("/:id", taskController.deleteTask)
taskRouter.get("/:id", taskController.getUniqueTask)

export default taskRouter;
