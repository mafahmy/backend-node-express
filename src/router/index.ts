// Router index
import express from 'express';
import userRoutes from './userRoutes';
import newsApiRoutes from './newsApiRoutes';
// import other routes...

const router = express.Router();

router.use('/users', userRoutes);
router.use('/api-news', newsApiRoutes);
// router.use('/otherPath', otherRoutes);

export default router;
