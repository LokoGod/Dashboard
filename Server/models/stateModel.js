import connection from "../database/DBconfig";

const stateModel = {
  getState: (callback) => {
    connection.query("SELECT * FROM states", (error, results) => {
      if (error) {
        console.error(error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
};

export default stateModel;
