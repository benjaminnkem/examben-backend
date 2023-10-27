import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':name')
  findUser(@Param('name') name: string) {
    return this.usersService.findUser(name);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createNewUser(@Body() creteUserDto: CreateUserDto) {
    this.usersService.addNewUser(creteUserDto);
  }
}
