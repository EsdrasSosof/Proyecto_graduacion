import { IsString, MaxLength } from "class-validator";

export class CreateDetailDto {
    detail_id: number;

    @IsString()
    @MaxLength(260, {
        message: 'El máximo de caracteres es de 260',
      })
    description: string;
    date_created: Date;
    date_updated: Date;
}
