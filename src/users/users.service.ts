import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/users.schema';
import { UpdateUserDto, UsersDto } from './dtos/users.dto';
import { hashPassword } from 'src/utils/password-validation.util';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(createUserDto: UsersDto) {
    try {
      // const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const hashedPassword = await hashPassword(createUserDto.password);
      const user = new UsersDto();
      // Object.assign(userDto, { username, password: hashedPassword });
      user.userName = createUserDto.userName;
      user.password = hashedPassword;
      return new this.userModel(user).save();
    } catch (error) {
      if (error.writeConcernError && error.writeConcernError.code === 11000) {
        return null;
      }
    }
  }
  async findUserByUsername(username:string){

    return await this.userModel.findOne({userName:username});

  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }



  async getUserByUserId(_userId: string) {
    const user = await this.userModel.findOne({ _userId }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }



  async updateUserById(_userId: string, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;
    let updatedPasswordDto: UpdateUserDto;

    if (password) {
      const hashedPassword = await hashPassword(password);
      updatedPasswordDto = { ...rest, password: hashedPassword };
    } else {
      updatedPasswordDto = { ...rest };
    }

    const updatedUser = await this.userModel
      .findOneAndUpdate({ _userId }, updatedPasswordDto, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }



  async deleteUserById(_userId: string) {
    const deletedUser = await this.userModel.findOneAndDelete({ _userId });
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }
  
  
  async deleteAllusers() {
    return this.userModel.deleteMany({}).exec();
  }
}
