import "dotenv/config";
import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import loggerMiddleware from "./middleware/loggerMiddleware.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sequelize from "./config/connection.js";
//import seedAuthorityIssues from './seeds/issue-authority-seed.js';

import authRoutes from "./routes/authRoutes.js";
import feedRoutes from "./routes/api/feed.js";
import reportRoutes from "./routes/ReportAuthorityRoute.js";
import weatherRoutes from "./routes/weatherRoute.js";
import reportAuthorityRoutes from "./routes/ReportAuthorityRoute.js";
import issueRoutes from "./routes/communityRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

// Middleware
app.use(corsMiddleware); // CORS middleware for client requests
app.use(express.json()); // Body parser for JSON
app.use(loggerMiddleware); // Log all incoming requests

//Use the weather routes
app.use(weatherRoutes);

//Report Issue Authority creation
app.use("/api/reportAuthority", reportAuthorityRoutes);

// Use the feed routes
app.use("/api/feed", feedRoutes);

// Use the report routes
app.use("/api/report", reportRoutes); // Adding report routes

// Use the community issues route
app.use("/", issueRoutes); // Add community issue route

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Use the imported user routes for registration and other endpoints
app.use("/api", authRoutes);

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

// (async () => {
//   try {
//     await sequelize.sync({ force: true }); // Drop & recreate tables
//     await seedAuthorityIssues(); // Seed the database with issues
//     console.log("Database seeded successfully.");
//   } catch (error) {
//     console.error("Failed to seed database:", error);
//   }
// })();

(async () => {
  try {
    // Sync the models with the database
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully.");

    app.listen(PORT, () =>
      console.log(`Server is running on port http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error("Failed to sync database:", error);
  }
})();
