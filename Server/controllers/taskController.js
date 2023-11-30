import taskModel from '../models/taskModel.js';

const taskController = {
  getTasks: (req, res) => {
    taskModel.getTask((err, results) => {
      if (err) {
        console.error("Error fetching tasks:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      } else {
        res.status(200).json({ success: true, data: results });
      }
    });
  },

  createTask: (req, res) => {
    try {
      const { category_id, state_id, summary, description } = req.body;

      taskModel.createTask({ category_id, state_id, summary, description }, (err, results) => {
        if (err) {
          console.error("Error creating task:", err);
          res.status(500).json({ success: false, message: "Internal Server Error" });
        } else {
          const taskId = results.insertId;
          res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: { id: taskId, category_id, state_id, summary, description },
          });
        }
      });
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  },

  getUniqueTask: (req, res) => {
    const taskId = req.params.id;

    taskModel.getUniqueTask(taskId, (err, results) => {
      if (err) {
        console.error("Error fetching unique task:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      } else {
        if (!results || results.length === 0) {
          res.status(404).json({ success: false, message: "Task not found" });
        } else {
          res.status(200).json({ success: true, data: results[0] });
        }
      }
    });
  },

  deleteTask: (req, res) => {
    const taskId = req.params.id;

    taskModel.deleteTask(taskId, (err, results) => {
      if (err) {
        console.error("Error deleting task:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      } else {
        if (results.affectedRows === 0) {
          res.status(404).json({ success: false, message: "Task not found" });
        } else {
          res.status(204).send(); // No content for successful deletion
        }
      }
    });
  },
};

export default taskController;
