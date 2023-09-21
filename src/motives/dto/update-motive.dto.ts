import { PartialType } from '@nestjs/swagger';
import { CreateMotiveDto } from './create-motive.dto';

export class UpdateMotiveDto extends PartialType(CreateMotiveDto) {}
