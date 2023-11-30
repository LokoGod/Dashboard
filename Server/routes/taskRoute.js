import express from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getTasks)
taskRouter.post("/", taskController.createTask);
taskRouter.delete("/:task_id", taskController.deleteTask)
taskRouter.get("/:task_id", taskController.getTask)

export default taskRouter;
