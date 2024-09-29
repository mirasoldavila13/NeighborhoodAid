import { Router } from 'express';
import { issueRouter } from './issueRoutes.js';

const router = Router();
router.use('/issue', issueRouter);
export default router;
