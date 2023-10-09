import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ReadAuthDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}
    
    //Función sin encriptar
    // async signIn(username: string, pass: string): Promise<ReadAuthDto> {
    //   const user = await this.usersService.findByUserNamePassword(username, pass);

    //   if (user?.password !== pass) {
    //     throw new UnauthorizedException();
    //   }
      
    //   const payload = { sub: user.user_id, username: user.username };

    //   return {
    //     token: await this.jwtService.signAsync(payload),
    //   };
    // }

    //Función con encriptar
    async signIn(username: string, password: string): Promise<{ token: string }> {
      // Busca el usuario por nombre de usuario y contraseña
      const user = await this.usersService.findByUserNamePassword(username, password);
  
      if (!user) {
        throw new UnauthorizedException('Usuario o contraseña incorrectos');
      }
  
      // Si el usuario y la contraseña son correctos, genera un token JWT
      const payload = { sub: user.user_id, username: user.username };
      const token = await this.jwtService.signAsync(payload);
  
      return { token };
    }
}
