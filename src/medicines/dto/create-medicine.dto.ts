import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateMedicineDto {
    medicine_id: number;

    @IsNotEmpty({
      message: 'El Nombre Comercial no debe estar vacío',
    })
    @IsString()
    @MaxLength(120, {
        message: 'El máximo de caracteres es de 120',
      })
    commercial_name: string;

    @IsNotEmpty({
      message: 'El Nombre Científico no debe estar vacío',
    })
    @IsString()
    @MaxLength(120, {
        message: 'El máximo de caracteres es de 120',
      })
    scientific_name: string;

    @IsString()
    @MaxLength(260, {
        message: 'El máximo de caracteres para la descripción es de 260',
      })
    description: string;
    date_created: Date;
    date_updated: Date;
}
