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
  createTask: (callback) => {
    connection.query("INSERT INTO task_list VALUES ('?', '?', '?', '?', '?')", (error, results) => {
      if (error) {
        console.error(error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
};

export default taskModel;
