import express from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter
  .route("/")
  .get(taskController.getTask)
  .post(taskController.createTask);

taskRouter
  .route("/:id")
  .get(taskController.getUniqueTask)
  .delete(taskController.deleteTask);

taskRouter.patch("/:id", taskController.completedTask);

export default taskRouter;
