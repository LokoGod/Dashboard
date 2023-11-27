import express from 'express'
import categoryController from "../controllers/categoryController.js";

const router = express.Router()

router.get("/", categoryController.getCategory)

export default router