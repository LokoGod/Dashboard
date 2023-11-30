import connection from "../database/DBconfig.js";

const taskModel = {
  getTask: (callback) => {
    connection.query("SELECT * FROM task_list", (error, results) => {
      callback(error, results);
    });
  },

  createTask: (taskData, callback) => {
    const { category_id, state_id, summary, description } = taskData;
    connection.query(
      "INSERT INTO task_list (category_id, state_id, summary, description) VALUES (?, ?, ?, ?)",
      [category_id, state_id, summary, description],
      (error, results) => {
        callback(error, results);
      }
    );
  },

  getUniqueTask: (taskId, callback) => {
    connection.query(
      "SELECT * FROM task_list WHERE task_id = ?",
      [taskId],
      (error, results) => {
        callback(error, results);
      }
    );
  },

  deleteTask: (taskId, callback) => {
    connection.query(
      "DELETE FROM task_list WHERE task_id = ?",
      [taskId],
      (error, results) => {
        callback(error, results);
      }
    );
  },
};

export default taskModel;
