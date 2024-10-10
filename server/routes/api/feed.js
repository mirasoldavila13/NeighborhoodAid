import express from 'express';
import feedController from '../../controllers/feedController.js';
import commentController from '../../controllers/commentController.js'; // Import the comment controller
import authMiddleware from '../../middleware/authMiddleware.js';

const router = express.Router();

// Routes for feeds
router.get('/', feedController.getAllFeeds); // Public access to get all feeds
router.post('/', authMiddleware, feedController.createFeed); // Create a feed (protected)
router.put('/:id', authMiddleware, feedController.updateFeed); // Update a feed (protected)
router.delete('/:id', authMiddleware, feedController.deleteFeed); // Delete a feed (protected)
router.post('/:id/like', authMiddleware, feedController.likeFeed); // Like a feed (protected)

// Routes for comments associated with feeds
router.post('/:feedId/comment', authMiddleware, commentController.createComment); // Create a comment on a feed (protected)
router.get('/:feedId/comments', commentController.getCommentsByFeedId); // Get comments for a specific feed (public access)
router.put('/comment/:id', authMiddleware, commentController.updateComment); // Update a comment (protected)
router.delete('/comment/:id', authMiddleware, commentController.deleteComment); // Delete a comment (protected)

export default router;
