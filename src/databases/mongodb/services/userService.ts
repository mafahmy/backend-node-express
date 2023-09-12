import { UserRepository } from '../repositories/userRepository';

/**
 * Service class for user operations.
 */
export class UserService {
  userRepository: UserRepository;

  /**
   * UserService constructor.
   */
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Creates a new user.
   *
   * @param {User} potentialUser - The user to be created.
   * @returns {Promise<User>} The created user.
   * @throws {Error} If an error occurs during user creation.
   */
  async createUser(potentialUser: User) {
    try {
      return await this.userRepository.create(potentialUser);
    } catch (error) {
      console.error(error);
      throw new Error(
        `An error in user service occured while creating user ${error}`
      );
    }
  }

  /**
   * Retrieves all users.
   *
   * @returns {Promise<Array<User>>} All users.
   * @throws {Error} If an error occurs during retrieval of users.
   */
  async getAllUsers() {
    try {
      return await this.userRepository.getAll();
    } catch (error) {
      console.error(error);
      throw new Error(
        `An error in user service occured while getting all users ${error}`
      );
    }
  }

  /**
   * Retrieves a user by ID.
   *
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Promise<User>} The user with the given ID.
   * @throws {Error} If an error occurs during retrieval of the user.
   */
  async getUserById(id: string) {
    try {
      return await this.userRepository.getById(id);
    } catch (error) {
      console.error(error);
      throw new Error(
        `An error in user service occured while getting user by id ${error}`
      );
    }
  }

  /**
   * Updates a user by ID.
   *
   * @param {string} id - The ID of the user to update.
   * @param {User} potentialUser - The updated user data.
   * @returns {Promise<User>} The updated user.
   * @throws {Error} If an error occurs during update of the user.
   */
  async updateUserById(id: string, potentialUser: User) {
    try {
      return await this.userRepository.updateById(id, potentialUser);
    } catch (error) {
      console.error(error);
      throw new Error(
        `An error in user service occured while updating user by id ${error}`
      );
    }
  }

  /**
   * Deletes a user by ID.
   *
   * @param {string} id - The ID of the user to delete.
   * @returns {Promise<void>}
   * @throws {Error} If an error occurs during deletion of the user.
   */
  async deleteUserById(id: string) {
    try {
      return await this.userRepository.deleteById(id);
    } catch (error) {
      console.error(error);
      throw new Error(
        `An error in user service occured while deleting a user by id ${error}`
      );
    }
  }
}
