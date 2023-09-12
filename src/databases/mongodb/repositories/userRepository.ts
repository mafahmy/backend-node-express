import { UserModel } from '../models/userModel';
import mongoose, { Model } from 'mongoose';

export class UserRepository {
  model: Model<User>;
  constructor(model: Model<User>) {
    this.model = model;
  }

  async create(potentialUser: User) {
    try {
      return await this.model.create(potentialUser);
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating the user: ' + error);
    }
  }

  async getAll() {
    try {
      return await this.model.find({});
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while getting all users: ' + error);
    }
  }

  async getById(id: string) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      console.error(error);
      throw new Error(
        'An error occurred while getting the user by id: ' + error
      );
    }
  }

  async updateById(id: string, potentialUpdatedUser: User) {
    try {
      return await this.model.findByIdAndUpdate(id, potentialUpdatedUser, {
        new: true,
      });
    } catch (error) {
      console.error(error);
      throw new Error(
        'An error occurred while updating the user by id: ' + error
      );
    }
  }

  async deleteById(id: string) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
      throw new Error(
        'An error occurred while deleting the user by id: ' + error
      );
    }
  }
}
