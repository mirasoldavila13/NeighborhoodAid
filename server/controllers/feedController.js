import Feed from "../models/feed.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";

// Fetch all feeds along with the user who posted them and any comments
const getAllFeeds = async (_req, res) => {
  try {
    const feeds = await Feed.findAll({
      include: [
        {
          model: User,
          attributes: ["email"], // Include user's email only
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["email"], // Include commenter's email
          },
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(feeds);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feeds" });
  }
};

// Create a new feed post
const createFeed = async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id; // Get the userId from the JWT middleware
  try {
    const newFeed = await Feed.create({ content, userId });
    res.status(201).json(newFeed);
  } catch (error) {
    res.status(500).json({ error: "Failed to create feed" });
  }
};

// Update an existing feed
const updateFeed = async (req, res) => {
  const feedId = req.params.id;
  const userId = req.user.id;
  const { content } = req.body;

  try {
    const feed = await Feed.findOne({ where: { id: feedId, userId } });
    if (!feed) return res.status(403).json({ message: "Unauthorized" });

    feed.content = content;
    await feed.save();
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).json({ error: "Failed to update feed" });
  }
};

// Delete a feed
const deleteFeed = async (req, res) => {
  const feedId = req.params.id;
  const userId = req.user.id;

  try {
    const feed = await Feed.findOne({ where: { id: feedId, userId } });
    if (!feed) return res.status(403).json({ message: "Unauthorized" });

    await feed.destroy();
    res.status(200).json({ message: "Feed deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feed" });
  }
};

// Like a feed
const likeFeed = async (req, res) => {
  const feedId = req.params.id;

  try {
    const feed = await Feed.findByPk(feedId);
    if (!feed) return res.status(404).json({ message: "Feed not found" });

    feed.likes += 1;
    await feed.save();
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).json({ error: "Failed to like feed" });
  }
};

// Comment on a feed
const commentOnFeed = async (req, res) => {
  const feedId = req.params.id;
  const { content } = req.body;
  const userId = req.user.id;

  try {
    const feed = await Feed.findByPk(feedId);
    if (!feed) return res.status(404).json({ message: "Feed not found" });

    const comment = await Comment.create({ content, feedId, userId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to comment on feed" });
  }
};

export default {
  getAllFeeds,
  createFeed,
  updateFeed,
  deleteFeed,
  likeFeed,
  commentOnFeed,
};
