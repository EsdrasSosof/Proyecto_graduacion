import { PartialType } from '@nestjs/swagger';
import { CreateMedDiagnosticDto } from './create-med_diagnostic.dto';

export class UpdateMedDiagnosticDto extends PartialType(CreateMedDiagnosticDto) {}
