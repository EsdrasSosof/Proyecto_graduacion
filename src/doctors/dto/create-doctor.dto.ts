import {IsDateString, IsEmail, IsNotEmpty, IsNumberString, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateDoctorDto {
    personal_id: number;

    @MinLength(10, {
        message: 'El mínimo de caracteres para el colegiado es de 10',
      })
    @MaxLength(13, {
        message: 'El máximo de caracteres para el colegiado es de 13',
      })
    @IsNotEmpty()
    @IsNumberString(undefined, { message: 'El número de colegiado debe ser una cadena numérica.' })
    member_number: number;

    @IsNotEmpty()
    @IsNumberString(undefined, { message: 'El número debe ser una cadena numérica.' })
    @Length(13, 13, {
      message: 'El número de identificación debe tener exactamente 13 caracteres.',
    })
    identification: number;

    @IsString()
    name: string;

    @IsString()
    lastame: string;

    @IsDateString({ strict: true },
      { message: 'Debe ser una fecha válida en formato ISO 8601 sin hora "AAAA-MM-DD".' })
    dof: Date;

    @IsString()
    @MaxLength(50, {
        message: 'El máximo de caracteres para la dirección es de 50',
      })
    address: string;

    @MinLength(8, {
        message: 'El mínimo de caracteres para el número telefónico es de 8',
      })
    @MaxLength(10, {
        message: 'El máximo de caracteres para el número telefónico es de 10',
      })
    @IsNumberString(undefined, { message: 'El número debe ser una cadena numérica.' })
    phone: number;

    @IsEmail()
    email: string;

    date_created: Date;
    date_updated: Date;
}
