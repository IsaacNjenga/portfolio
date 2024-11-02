import express from "express";
import { fetchFile, fetchResume } from "../controllers/resumeController.js";

const router = express.Router();

//fetching resume
router.get("/resume", fetchResume);
router.get("/file/:id", fetchFile);

export { router as Router };
