import { IsString, MaxLength } from "class-validator";

export class CreateMedDiagnosticDto {
    correlative_id: number;

    @IsString()
    @MaxLength(210, {
        message: 'El máximo de caracteres es de 210',
      })
    symptom_detail: string;

    @IsString()
    @MaxLength(210, {
        message: 'El máximo de caracteres es de 210',
      })
    pre_existing: string;

    @IsString()
    @MaxLength(210, {
        message: 'El máximo de caracteres es de 210',
      })
    Detected_disease: string;
    date_created: Date;
    date_updated: Date;
}
