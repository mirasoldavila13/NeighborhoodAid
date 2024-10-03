import Feed from "../models/feed.js";

// Controller gets all feed items
const getAllFeeds = async (req, res) => {
  try {
    const feeds = await Feed.findAll({ order: [["createdAt", "DESC"]] });
    res.json(feeds);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feeds" });
  }
};

// Create a new feed item
const createFeed = async (req, res) => {
  const { content } = req.body;
  try {
    const newFeed = await Feed.create({ content });
    res.status(201).json(newFeed);
  } catch (error) {
    res.status(500).json({ error: "Failed to create feed" });
  }
};

export default { getAllFeeds, createFeed };
