import { PartialType } from '@nestjs/swagger';
import { CreateMedRecordDto } from './create-med_record.dto';

export class UpdateMedRecordDto extends PartialType(CreateMedRecordDto) {}
