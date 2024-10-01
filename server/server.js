import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sequelize from "./config/connection.js";
import authRoutes from './routes/authRoutes.js'; // Importing the authentication routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

// Use the imported user routes for registration and other endpoints
app.use('/api', authRoutes); 

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

(async () => {
  try {
    // Sync the models with the database and alter the schema if necessary
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully.');

    app.listen(PORT, () =>
      console.log(`Server is running on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error('Failed to sync database:', error);
  }
})();
