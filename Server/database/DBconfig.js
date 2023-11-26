import mysql from "mysql";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "root",
  database: "task_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

export default connection;
