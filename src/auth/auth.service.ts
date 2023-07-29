import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ReadAuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<ReadAuthDto> {
      const user = await this.usersService.findByUserNamePassword(username, pass);

      if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
      
      const payload = { sub: user.user_id, username: user.username };

      return {
        token: await this.jwtService.signAsync(payload),
      };
    }
}
