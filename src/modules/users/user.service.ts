import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY } from './constants';
import { UserDto } from './dto/user-dto/user-dto';
import { User } from './entities/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(userDto: UserDto): Promise<User> {
    const newUser = new User();
    newUser.name = userDto.name;
    newUser.surname = userDto.surname;

    return this.userRepository.save(newUser);
  }

  async remove(userId: number): Promise<any> {
    return this.userRepository.delete(userId);
  }

  async update(userId: number, userDto: UserDto): Promise<any> {
    const updatedUser = await this.userRepository.findOne({
      where: { id: userId },
    });
    updatedUser.name = userDto.name;
    updatedUser.surname = userDto.surname;

    return this.userRepository.save(updatedUser);
  }
}
