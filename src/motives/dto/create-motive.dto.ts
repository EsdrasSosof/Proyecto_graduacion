import { IsString } from "class-validator";

export class CreateMotiveDto {
    motive_id: number;

    @IsString()
    name: string;

    date_created: Date;

    date_updated: Date;
}
