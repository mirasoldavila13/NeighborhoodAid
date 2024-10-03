import Feed from "../models/feed.js";
import User from "../models/user.js";

// Fetch all feeds along with the user who posted them
const getAllFeeds = async (req, res) => {
  try {
    const feeds = await Feed.findAll({
      include: {
        model: User,
        attributes: ["email"], // Only include the user's email
      },
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

export default { getAllFeeds, createFeed };
