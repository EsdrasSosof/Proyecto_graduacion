import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedDiagnosticsService } from './med_diagnostics.service';
import { CreateMedDiagnosticDto } from './dto/create-med_diagnostic.dto';
import { UpdateMedDiagnosticDto } from './dto/update-med_diagnostic.dto';

@Controller('med-diagnostics')
export class MedDiagnosticsController {
  constructor(private readonly medDiagnosticsService: MedDiagnosticsService) {}

  @Post()
  create(@Body() createMedDiagnosticDto: CreateMedDiagnosticDto) {
    return this.medDiagnosticsService.create(createMedDiagnosticDto);
  }

  @Get()
  findAll() {
    return this.medDiagnosticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medDiagnosticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedDiagnosticDto: UpdateMedDiagnosticDto) {
    return this.medDiagnosticsService.update(+id, updateMedDiagnosticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medDiagnosticsService.remove(+id);
  }
}
