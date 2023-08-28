import { Body, Controller, Post,Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './authguard/local-auth.guard';
import { UsersDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService, private userService:UsersService){}


    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }
    
    @Post('signup')
    async registerUser(@Body() createUserDto:UsersDto){

        return await this.userService.createUser(createUserDto);
        
    }
}
