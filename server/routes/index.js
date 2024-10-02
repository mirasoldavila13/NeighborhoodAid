import { Router } from 'express';
import authRoutes from './authRoutes.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();
router.use('/api/auth', authRoutes);
router.use('/api', authenticateToken, issueRoutes); // Need auth token to access files in api
export default router;