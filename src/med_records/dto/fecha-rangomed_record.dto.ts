import { IsDate, IsDateString } from "class-validator";

export class FechaRangeDto {
    @IsDate()
    // @IsDateString({ strict: true },
    //     { message: 'Debe ser una fecha válida en formato ISO 8601 sin hora "AAAA-MM-DD".' })
    fechaInicial: Date;
  
    @IsDate()
    // @IsDateString({ strict: true },
    //     { message: 'Debe ser una fecha válida en formato ISO 8601 sin hora "AAAA-MM-DD".' })
    fechaFinal: Date;
}
