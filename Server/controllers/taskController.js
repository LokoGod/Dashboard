import taskModel from "../models/taskModel.js";

const taskController = {
  getTask: (req, res) => {
    taskModel.getTask((err, results) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      } else {
        res.status(200).json(results);
      }
    });
  },

  createTask: (req, res) => {
    try {
      const { category_id, state_id, summary, description, completed } = req.body;

      taskModel.createTask(
        { category_id, state_id, summary, description, completed },
        (err, results) => {
          if (err) {
            console.error("Error creating task:", err);
            res.status(500).json({
              success: false,
              message: "Internal server error",
            });
          } else {
            const taskId = results.insertId;
            res.status(201).json({
              success: true,
              message: "Task created successfully",
              data: { id: taskId, category_id, state_id, summary, description, completed },
            });
          }
        }
      );
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  getUniqueTask: (req, res) => {
    const taskId = req.params.id;

    taskModel.getUniqueTask(taskId, (err, results) => {
      // Corrected function name
      if (err) {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      } else {
        res.status(200).json(results);
      }
    });
  },

  completedTask: (req, res) => {
    try {
      const taskId = req.params.id;
      const { completed } = req.body;

      taskModel.completedTask(taskId, completed, (err, results) => {
        if (err) {
          console.error("Error updating task:", err);
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Task status updated successfully",
            data: results,
          });
        }
      });
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  deleteTask: (req, res) => {
    const taskId = req.params.id; // Extract taskId from params

    taskModel.deleteTask(taskId, (err, results) => {
      // Corrected function parameters
      if (err) {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      } else {
        res.status(200).json(results);
      }
    });
  },
};

export default taskController;
