import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router(); // Use express.Router() directly

// Register and Login Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
