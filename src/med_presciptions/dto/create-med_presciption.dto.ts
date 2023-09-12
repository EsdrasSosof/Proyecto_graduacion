import { IsString, MaxLength } from "class-validator";

export class CreateMedPresciptionDto {
    prescription_id: number;

    @IsString()
    @MaxLength(120, {
        message: 'El máximo de caracteres es de 120',
      })
    dose: string;
    date_created: Date;
    date_updated: Date;
}
