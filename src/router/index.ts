// Router index
import express from 'express';
import userRoutes from './userRoutes';
// import other routes...

const router = express.Router();

router.use('/users', userRoutes);
// router.use('/otherPath', otherRoutes);

export default router;
