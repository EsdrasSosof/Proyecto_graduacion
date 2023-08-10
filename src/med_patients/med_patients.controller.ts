import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedPatientsService } from './med_patients.service';
import { CreateMedPatientDto } from './dto/create-med_patient.dto';
import { UpdateMedPatientDto } from './dto/update-med_patient.dto';

@Controller('med-patients')
export class MedPatientsController {
  constructor(private readonly medPatientsService: MedPatientsService) {}

  @Post()
  create(@Body() createMedPatientDto: CreateMedPatientDto) {
    return this.medPatientsService.create(createMedPatientDto);
  }

  @Get()
  findAll() {
    return this.medPatientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medPatientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedPatientDto: UpdateMedPatientDto) {
    return this.medPatientsService.update(+id, updateMedPatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medPatientsService.remove(+id);
  }
}
