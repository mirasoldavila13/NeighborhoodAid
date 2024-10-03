import express from "express";
import feedController from "../controllers/feedController.js";

const router = express.Router();

// Route to get all feeds
router.get("/", feedController.getAllFeeds);

// Route to create a new feed
router.post("/", feedController.createFeed);

export default router;
