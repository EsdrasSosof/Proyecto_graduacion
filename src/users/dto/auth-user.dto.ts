import { Exclude } from 'class-transformer';

export class AuthUserDto {

    user_id: string;
    
    username: string;
   
    password: string;
    
    @Exclude()
    date_created: string;
    
    @Exclude()
    date_updated: string;
}