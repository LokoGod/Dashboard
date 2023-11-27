import connection from "../database/DBconfig.js";

const categoryModel = {
    getCategory: (callback) => {
        connection.query("SELECT category_name FROM categories", (error, results) => {
            if (error) {
                console.error(error);
                callback(error, null)
            } else {
                callback(null, results)
            }
        })
    }
}

export default categoryModel