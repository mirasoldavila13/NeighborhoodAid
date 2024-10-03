import express from "express";
import feedController from "../controllers/feedController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Route to fetch all feeds (public)
router.get("/", feedController.getAllFeeds);

// Route to create a feed (protected)
router.post("/", authMiddleware, feedController.createFeed);

export default router;
