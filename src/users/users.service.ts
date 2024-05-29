import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  // Create a new user
  async create(user: Users): Promise<Users> {
    try {
      return await this.usersRepository.save(user);
    } catch (error) {
      // Handle any errors that occur during creation
      throw new Error(`Could not create user: ${error.message}`);
    }
  }

  // Retrieve all users
  async findAll(): Promise<Users[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      // Handle any errors that occur during retrieval
      throw new Error(`Could not retrieve users: ${error.message}`);
    }
  }

  // Find a user by ID
  async findOne(id: number): Promise<Users> {
    try {
      const user = await this.usersRepository.findOne({ where: { id } });
      if (!user) {
        // Throw a NotFoundException if the user is not found
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      // Handle any errors that occur during retrieval or if the ID is invalid
      throw new Error(`Could not find user: ${error.message}`);
    }
  }

  // Update a user by ID
  async update(id: number, updatedUser: Users): Promise<Users> {
    try {
      await this.usersRepository.update(id, updatedUser);
      return this.findOne(id);
    } catch (error) {
      // Handle any errors that occur during update or if the ID is invalid
      throw new Error(`Could not update user: ${error.message}`);
    }
  }

  // Remove a user by ID
  async remove(id: number): Promise<void> {
    try {
      const result = await this.usersRepository.delete(id);
      if (result.affected === 0) {
        // Throw a NotFoundException if the user is not found for deletion
        throw new NotFoundException(`User with ID ${id} not found for deletion`);
      }
    } catch (error) {
      // Handle any errors that occur during deletion or if the ID is invalid
      throw new Error(`Could not remove user: ${error.message}`);
    }
  }
}
