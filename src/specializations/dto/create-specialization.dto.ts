import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateSpecializationDto {
    specialization_id: number;

    @IsNotEmpty({
      message: 'El nombre no debe estar vacío',
    }
    )
    @IsString()
    @MaxLength(50, {
        message: 'El máximo de caracteres para el nombre es de 50',
      })
    name: string;

    @IsString()
    @MaxLength(50, {
        message: 'El máximo de caracteres para la descripción es de 50',
      })
    description: string;
}
