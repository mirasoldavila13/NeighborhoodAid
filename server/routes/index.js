import { Router } from 'express';
import authRoutes from './authRoutes.js';
import issueRoutes from './issueRoutes.js';
import  authMiddleware from '../middleware/authMiddleware.js';

const router = Router();
router.use('/api/auth', authRoutes);
router.use('/api/issues', authMiddleware, issueRoutes); // Need auth token to access files in api
export default router;