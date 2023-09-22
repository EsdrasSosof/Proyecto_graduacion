import { IsDateString, IsString, MaxLength } from "class-validator";

export class CreateMedConsultationDto {
    consultation_id: number;

    @IsDateString({ strict: true },
        { message: 'Debe ser una fecha válida en formato ISO 8601 sin hora "AAAA-MM-DD".' })
    date_consultation: Date;
    date_created: Date;
    date_updated: Date;
}
