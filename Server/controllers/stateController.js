import stateModel from "../models/stateModel.js";

const stateController = {
  getState: (req, res) => {
    stateModel.getState((err, results) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  },
};

export default stateController;
