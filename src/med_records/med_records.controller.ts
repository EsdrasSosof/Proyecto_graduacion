import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MedRecordsService } from './med_records.service';
import { CreateMedRecordDto } from './dto/create-med_record.dto';
import { UpdateMedRecordDto } from './dto/update-med_record.dto';
import { FechaRangeDto } from './dto/fecha-rangomed_record.dto';
import { MedRecordEntity } from './entities';

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

  @Post('search')
  async searchByDateRange(@Body() fechaRangeDto: any) {
    console.log("fecha?",fechaRangeDto);
    const records = await this.medRecordsService.searchByDateRange(fechaRangeDto);
    return records; // Devolverá los registros encontrados en JSON.
  }
}
