import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto, UsersDto } from './dtos/users.dto';
import { isPasswordValid } from 'src/utils/password-validation.util';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Post('signup')
  // async create(@Body() userDto: UsersDto) {
  //   if (!isPasswordValid(userDto.password)) {
  //     throw new BadRequestException('Invalid password format');
  //   }
  //   const user = await this.usersService.createUser(userDto);
  //   //for security if i dont dont want to see password
  //   const { password, ...userWithoutPassword } = user;
  //   return userWithoutPassword;
  // }

  @Get()
  async getAllUsers() {
    // console.log('object');
    const users = await this.usersService.getUsers();
    // console.log('usersCon', users);
    return users;
  }

  @Get(':_userId')
  async getUser(@Param('_userId') _userId: string) {
    // console.log('object', _userId);
    const user = await this.usersService.getUserByUserId(_userId);
    return user;
  }

  @Delete(':_userId')
  async deleteUser(@Param('_userId') _userId: string) {
    // console.log('object', _userId);
    const deletedUser = await this.usersService.deleteUserById(_userId);
    return deletedUser;
  }

  @Put(':_userId')

  async updateUser(
    @Param('_userId') _userId: string,
    @Body() updateRecipeDto: UpdateUserDto,
  ) {
    if (!isPasswordValid(updateRecipeDto.password)) {
      throw new BadRequestException('Invalid password format');
    }
    // console.log('object', _userId);
    const updatedUser = await this.usersService.updateUserById(
      _userId,
      updateRecipeDto,
    );
    // console.log('CupdatedUser', updatedUser);
    return updatedUser;
  }

  @Delete()
  async deleteAll() {
    await this.usersService.deleteAllusers();
    return { message: 'All users deleted' };
  }
}
