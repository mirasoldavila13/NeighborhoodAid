import express from 'express';
import feedController from '../../controllers/feedController.js';
import authMiddleware from '../../middleware/authMiddleware.js';

const router = express.Router();

// Route to fetch all feeds (public)
router.get('/', feedController.getAllFeeds);

// Route to create a feed (protected)
router.post('/', authMiddleware, feedController.createFeed);

// Route to update a feed (protected)
router.put('/:id', authMiddleware, feedController.updateFeed);

// Route to delete a feed (protected)
router.delete('/:id', authMiddleware, feedController.deleteFeed);

// Route to like a feed (protected)
router.post('/:id/like', authMiddleware, feedController.likeFeed);

// Route to comment on a feed (protected)
router.post('/:id/comment', authMiddleware, feedController.commentOnFeed);

export default router;
