import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserDto } from './dto/user-dto/user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDto: UserDto, @Res() response) {
    return this.userService
      .create(userDto)
      .then((result) => response.status(HttpStatus.CREATED).json(result))
      .catch((error) =>
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error),
      );
  }

  @Get()
  getAll(@Res() response) {
    return this.userService
      .findAll()
      .then((result) => response.status(HttpStatus.OK).json(result))
      .catch((error) =>
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error),
      );
  }

  @Put(':id')
  update(@Body() userDto: UserDto, @Res() response, @Param('id') userId) {
    return this.userService
      .update(userId, userDto)
      .then((result) => response.status(HttpStatus.OK).json(result))
      .catch((error) =>
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error),
      );
  }

  @Delete(':id')
  remove(@Res() response, @Param('id') userId) {
    return this.userService
      .remove(userId)
      .then((result) => response.status(HttpStatus.NO_CONTENT).json())
      .catch((error) =>
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error),
      );
  }
}
