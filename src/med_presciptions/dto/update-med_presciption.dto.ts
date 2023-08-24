import { PartialType } from '@nestjs/swagger';
import { CreateMedPresciptionDto } from './create-med_presciption.dto';

export class UpdateMedPresciptionDto extends PartialType(CreateMedPresciptionDto) {}
