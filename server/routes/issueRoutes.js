import { Router } from 'express';
import { issueRouter } from "../controllers/issueController.js";

const router = Router();
router.use('/issue', issueRouter);
export default router;