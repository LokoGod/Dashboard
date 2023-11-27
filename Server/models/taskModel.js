import connection from "../database/DBconfig";

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
  
};

export default taskModel;
