import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {

    const user = this.userRepository.create(createUserDto);
    console.log(user)
    user.created_at = new Date();
    user.updated_at = new Date();
    user.is_validated = false;
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = Object.assign(user, updateUserDto);
    updatedUser.updated_at = new Date();
    return await this.userRepository.save(updatedUser);
  }
}





