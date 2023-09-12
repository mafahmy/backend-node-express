import { Request, Response } from 'express';
import { UserService } from '../databases/mongodb/services/userService';

/**
 * Controller class for user operations.
 */
export default class UserController {
  userService: UserService;

  /**
   * UserController constructor.
   * @param {UserService} userService - The service to handle user operations.
   */
  constructor(userService: UserService) {
    this.userService = userService;
  }

  /**
   * Retrieves all users.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `An error in the user controller occured while getting all users ${error}`,
      });
    }
  }

  /**
   * Creates a new user.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  async createUser(req: Request, res: Response) {
    try {
      const potentialUser: User = req.body;
      await this.userService.createUser(potentialUser);
      res.json('User created');
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `An error in the user controller occured while creating user ${error}`,
      });
    }
  }

  /**
   * Retrieves a user by ID.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  async getUserById(req: Request, res: Response) {
    try {
      console.log(req.body);
      const id: string = req.body.id;
      console.log(req.body);
      const foundedUser = await this.userService.getUserById(id);
      res.json(foundedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `An error in the user controller occured while getting a user by id ${error}`,
      });
    }
  }

  /**
   * Updates a user by ID.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  async updateUserById(req: Request, res: Response) {
    try {
      const { id, updatedUser }: { id: string; updatedUser: User } = req.body;
      await this.userService.updateUserById(id, updatedUser);
      res.send({ message: 'User updated' });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `An error in the user controller occured while updating a user ${error}`,
      });
    }
  }

  /**
   * Deletes a user by ID.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  async deleteUserById(req: Request, res: Response) {
    try {
      console.log(req.params.id)
      const id: string = req.params.id
      await this.userService.deleteUserById(id);
      res.send({ message: 'USER DELETED' });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `An error in the user controller occured while deleting a user ${error}`,
      });
    }
  }
}
