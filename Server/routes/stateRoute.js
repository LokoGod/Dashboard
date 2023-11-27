import express from "express";
import stateController from "../controllers/stateController.js";

const stateRouter = express.Router();

stateRouter.get("/", stateController.getState);

export default stateRouter;
