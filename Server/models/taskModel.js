import connection from "../database/DBconfig.js";

const taskModel = {
  getTask: (callback) => {
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
      [category_id, state_id, summary, description],
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
