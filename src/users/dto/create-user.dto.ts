import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    user_id: number;
    
    @IsNotEmpty()
    @IsEmail()
    username: string;
    
    @IsNotEmpty()
    @MinLength(8, {
        message: 'El mínimo de caracteres para la contraseña es de 8',
      })
    password: string;
    
    date_created: Date;
    
    date_updated: Date;
}
