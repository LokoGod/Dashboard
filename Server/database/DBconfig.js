import mysql from "mysql";

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
