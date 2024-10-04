// Handles JWT or session authentication
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authMiddleware = async (req, res, next) => {
  // Expect "Bearer <token>"
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Attach the user to the request
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: "Failed to authenticate token" });
  }
};

export default authMiddleware;
