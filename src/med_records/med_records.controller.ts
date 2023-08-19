import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedRecordsService } from './med_records.service';
import { CreateMedRecordDto } from './dto/create-med_record.dto';
import { UpdateMedRecordDto } from './dto/update-med_record.dto';

@Controller('med-records')
export class MedRecordsController {
  constructor(private readonly medRecordsService: MedRecordsService) {}

  @Post()
  create(@Body() createMedRecordDto: CreateMedRecordDto) {
    return this.medRecordsService.create(createMedRecordDto);
  }

  @Get()
  findAll() {
    return this.medRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedRecordDto: UpdateMedRecordDto) {
    return this.medRecordsService.update(+id, updateMedRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medRecordsService.remove(+id);
  }
}
