import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedConsultationsService } from './med_consultations.service';
import { CreateMedConsultationDto } from './dto/create-med_consultation.dto';
import { UpdateMedConsultationDto } from './dto/update-med_consultation.dto';

@Controller('med-consultations')
export class MedConsultationsController {
  constructor(private readonly medConsultationsService: MedConsultationsService) {}

  @Post()
  create(@Body() createMedConsultationDto: CreateMedConsultationDto) {
    return this.medConsultationsService.create(createMedConsultationDto);
  }

  @Get()
  findAll() {
    return this.medConsultationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medConsultationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedConsultationDto: UpdateMedConsultationDto) {
    return this.medConsultationsService.update(+id, updateMedConsultationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medConsultationsService.remove(+id);
  }
}
