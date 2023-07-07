import { Body, Controller, Post, HttpCode, HttpStatus, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Public } from './auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiTags('Auth')
    signIn(@Body() signInDto: AuthDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
