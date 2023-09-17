import express from 'express';
import { fetchApiNewsController } from '../controllers/newsApiContollers';

const router = express.Router();
router.get('/', fetchApiNewsController);
export default router;
