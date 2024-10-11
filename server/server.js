import "dotenv/config"; // Load environment variables
import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import loggerMiddleware from "./middleware/loggerMiddleware.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sequelize from "./config/connection.js";

// Import your routes
import authRoutes from "./routes/authRoutes.js";
import feedRoutes from "./routes/api/feed.js";
import reportRoutes from "./routes/ReportAuthorityRoute.js";
import weatherRoutes from "./routes/weatherRoute.js";
import reportAuthorityRoutes from './routes/ReportAuthorityRoute.js';

// Helper variables for file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware); // CORS middleware for client requests
app.use(loggerMiddleware); // Log all incoming requests

// Static files setup (Make sure this path is correct for production)
app.use(express.static("../client/dist")); // Adjust if needed based on your folder structure

// Route Setup
app.use(weatherRoutes); // Weather API routes
app.use('/api/reportAuthority', reportAuthorityRoutes); // Report authority route
app.use("/api/feed", feedRoutes); // Feed routes
app.use("/api/report", reportRoutes); // Report routes
app.use("/api", authRoutes); // User routes for registration and other endpoints

// Test route to check if server is working
app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from the server!",
  });
});

// Serving client-side app when in production mode
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Database sync and server start
(async () => {
  try {
    // Sync the models with the database
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully.");

    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error("Failed to sync database:", error);
  }
})();
