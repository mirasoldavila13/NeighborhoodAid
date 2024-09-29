import { Router } from 'express';
import authRoutes from './authRoutes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();
router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes); // Need auth token to access files in api
export default router;