import express from 'express';
import { createReport } from '../controllers/reportController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new report (protected route)
router.post('/', authMiddleware, createReport);

export default router;
