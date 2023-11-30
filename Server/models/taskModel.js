import connection from "../database/DBconfig.js";

const taskModel = {
  getTasks: (callback) => {
    connection.query("SELECT * FROM task_list", (error, results) => {
      if (error) {
        console.error(error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
  createTask: (taskData, callback) => {
    const { category_id, state_id, summary, description } = taskData;

    connection.query(
      "INSERT INTO task_list (category_id, state_id, summary, description) VALUES (?, ?, ?, ?)",
      [category_id, state_id, summary, description], // The array prevents SQL injection
      (error, results) => {
        if (error) {
          console.error(error);
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },
  getTask: (callback) => {
    connection.query('SELECT * FROM task_list WHERE task_id = ?', (error, results) => {
      if (error) {
        console.error(error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
  deleteTask: (callback) => {
    connection.query(
      'DELETE FROM task_list WHERE category_id = "?"',
      (error, results) => {
        if (error) {
          console.error(error);
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },
};

export default taskModel;
