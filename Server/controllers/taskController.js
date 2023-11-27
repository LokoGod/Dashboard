import taskModel from "../models/taskModel.js";

const taskController = {
    getTask: (req, res) => {
        taskModel.getTask((err, results) => {
            if(err) {
                res.status(500).send("Internal Server Error")
            } else {
                res.status(200).json(results)
            }
        })
    },
    createTask: (req, res) => {
        taskModel.createTask((err, results) => {
            if(err) {
                res.status(500).send("Internal server error when creating")
            } else {
                res.status(201).send(results)
            }
        })
    }
}

export default taskController