import { Exclude } from 'class-transformer';

export class ReadUserDto {

    user_id: string;

    username: string;   

    @Exclude()
    password: string;
    
    date_created: string;
    
    date_updated: string;
}