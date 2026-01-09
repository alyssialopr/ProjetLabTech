import express from "express";
import { generateText } from "../controllers/mistralController.js";

const router = express.Router();

router.get('/generate', generateText);

export default router;