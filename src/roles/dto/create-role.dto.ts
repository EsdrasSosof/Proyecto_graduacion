import { IsString } from "class-validator";

export class CreateRoleDto {
    role_id: number;

    @IsString()
    name: string;
    date_created: Date;
    date_updated: Date;
}
