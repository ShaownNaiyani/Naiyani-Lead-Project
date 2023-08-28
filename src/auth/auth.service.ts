import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interface/users.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService,private jwt:JwtService){}

    async validateUser(username:string,password:string){
        console.log(username+password);
        const user = await this.userService.findUserByUsername(username);

        if(user && bcrypt.compare(password,user.password)){

            const {password,...result} = user;

            return result;

        }

        return null;
    }

    async login(user:User){
        const payload = {
            userName:user.userName
        }

        return {...user,accessToken:this.jwt.sign(payload)};
    }
}
