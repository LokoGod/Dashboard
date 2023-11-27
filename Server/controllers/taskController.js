import taskModel from "../models/taskModel.js";

const taskController = {
  getTask: (req, res) => {
    taskModel.getTask((err, results) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  },
  createTask: (req, res) => {
    taskModel.createTask((err, results) => {
      try {
        const { category_id, state_id, summary, description } = req.body;
        const taskId = taskModel.createTask({
          category_id,
          state_id,
          summary,
          description,
        });
        res.status(201).json({
          success: true,
          message: "Task created successfully",
          data: { id: taskId, category_id, state_id, summary, description },
        });
      } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    });
  },
};

export default taskController;
