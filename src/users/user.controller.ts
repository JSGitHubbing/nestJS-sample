import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UserDto } from './dto/user-dto/user-dto';

@Controller()
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return 'Usuario creado';
  }

  @Get()
  getAll() {
    return 'Lista de usuarios';
  }

  @Put(':id')
  update(@Body() userDto: UserDto) {
    return 'Usuario actualizado';
  }

  @Delete(':id')
  remove() {
    return 'Usuario eliminado';
  }
}
