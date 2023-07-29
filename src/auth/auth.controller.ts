import { Body, Controller, Post, HttpCode, HttpStatus, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './auth.decorator';
import { CreateAuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @ApiTags('Auth')
    @Post('login')
    signIn(@Body() signInDto: CreateAuthDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
