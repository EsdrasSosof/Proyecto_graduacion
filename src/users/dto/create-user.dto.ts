export class CreateUserDto {
    username: string;
    password: string;
    date_created: Date;
    date_updated?: Date;
}
