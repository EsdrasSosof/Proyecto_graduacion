import { IsString, MaxLength } from "class-validator";

export class CreateSpecializationDto {
    specialization_id: number;

    @IsString()
    @MaxLength(50, {
        message: 'El máximo de caracteres para la descripción es de 50',
      })
    description: string;
}
