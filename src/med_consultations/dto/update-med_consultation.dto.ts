import { PartialType } from '@nestjs/swagger';
import { CreateMedConsultationDto } from './create-med_consultation.dto';

export class UpdateMedConsultationDto extends PartialType(CreateMedConsultationDto) {}
