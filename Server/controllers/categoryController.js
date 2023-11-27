import categoryModel from "../models/categoryModel.js";

const categoryController = {
    getCategory: (req, res) => {
        categoryModel.getCategory((err, results) => {
            if (err) {
                res.status(500).send("Internal Server Error")
            } else {
                res.status(200).json(results);
            }
        })
    }
}

export default categoryController