import { IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class UsersDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
export class UpdateUserDto extends PartialType(UsersDto) {
}
