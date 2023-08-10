import { PartialType } from '@nestjs/swagger';
import { CreateMedPatientDto } from './create-med_patient.dto';

export class UpdateMedPatientDto extends PartialType(CreateMedPatientDto) {}
