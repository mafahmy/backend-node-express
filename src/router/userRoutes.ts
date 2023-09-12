import express from 'express';
import UserController from '../controllers/userControllers';
import { UserService } from '../databases/mongodb/services/userService';
import { UserRepository } from '../databases/mongodb/repositories/userRepository';
import { UserModel } from '../databases/mongodb/models/userModel';

const router = express.Router();
const userRepository = new UserRepository(UserModel);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/', userController.getAllUsers.bind(userController));
router.post('/create-user', userController.createUser.bind(userController));
router.put('/update-user', userController.updateUserById.bind(userController));
router.get('/get-user', userController.getUserById.bind(userController));
router.delete(
  '/delete-uder',
  userController.deleteUserById.bind(userController)
);

export default router;
