import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedPresciptionsService } from './med_presciptions.service';
import { CreateMedPresciptionDto } from './dto/create-med_presciption.dto';
import { UpdateMedPresciptionDto } from './dto/update-med_presciption.dto';

@Controller('med-presciptions')
export class MedPresciptionsController {
  constructor(private readonly medPresciptionsService: MedPresciptionsService) {}

  @Post()
  create(@Body() createMedPresciptionDto: CreateMedPresciptionDto) {
    return this.medPresciptionsService.create(createMedPresciptionDto);
  }

  @Get()
  findAll() {
    return this.medPresciptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medPresciptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedPresciptionDto: UpdateMedPresciptionDto) {
    return this.medPresciptionsService.update(+id, updateMedPresciptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medPresciptionsService.remove(+id);
  }
}
