import connection from "../database/DBconfig";

const taskModel = {
    getTask: (callback) => {
        connection.query("SELECT * FROM task_list", callback)
    }
}