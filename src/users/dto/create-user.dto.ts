import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    user_id: number;
    
    @IsNotEmpty()
    @IsEmail()
    username: string;
    
    @IsNotEmpty()
    password: string;
    
    date_created: Date;
    
    date_updated: Date;
}
