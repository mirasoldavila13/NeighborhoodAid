// server/controllers/commentController.js
import Comment from "../models/comment.js";
import Feed from "../models/feed.js";
import User from "../models/user.js";

// Create a new comment for a feed post
const createComment = async (req, res) => {
  const { feedId } = req.params;
  const { content } = req.body;
  const userId = req.user.id;

  try {
    // Check if the feed exists
    const feed = await Feed.findByPk(feedId);
    if (!feed) {
      return res.status(404).json({ message: "Feed not found" });
    }

    // Create the comment
    const newComment = await Comment.create({
      content,
      userId,
      feedId,
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: "Failed to create comment" });
  }
};

// Fetch all comments for a specific feed post
const getCommentsByFeedId = async (req, res) => {
  const { feedId } = req.params;

  try {
    const comments = await Comment.findAll({
      where: { feedId },
      include: [
        {
          model: User,
          attributes: ["email"], // Include the email of the user who made the comment
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// Update a comment
const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const userId = req.user.id;

  try {
    // Find the comment by ID and userId
    const comment = await Comment.findOne({
      where: { id, userId },
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found or unauthorized" });
    }

    // Update the comment content
    comment.content = content;
    await comment.save();

    res.status(200).json(comment);
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ error: "Failed to update comment" });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    // Find the comment by ID and userId
    const comment = await Comment.findOne({
      where: { id, userId },
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found or unauthorized" });
    }

    // Delete the comment
    await comment.destroy();

    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
};

export default {
  createComment,
  getCommentsByFeedId,
  updateComment,
  deleteComment,
};
