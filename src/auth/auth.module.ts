import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schema/users.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStratery } from './strategies/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: `${process.env.jwt_secret}`,
      signOptions:{expiresIn:"3600s"}
    }),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService,UsersService,LocalStrategy,JwtStratery]
})
export class AuthModule {}
