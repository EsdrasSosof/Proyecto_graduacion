import { Injectable } from '@nestjs/common';
import { CreateMedDiagnosticDto } from './dto/create-med_diagnostic.dto';
import { UpdateMedDiagnosticDto } from './dto/update-med_diagnostic.dto';
import { MedDiagnosticRepository } from './repository/med_diagnostic.repository';

@Injectable()
export class MedDiagnosticsService {

  constructor(private readonly medDiagnosticRepository: MedDiagnosticRepository) {}
  async create(createMedDiagnosticDto: CreateMedDiagnosticDto) {
    return await this.medDiagnosticRepository.create(createMedDiagnosticDto);
  }

  async findAll() {
    return await this.medDiagnosticRepository.findAll();
  }

  async findOne(id: number) {
    return await this.medDiagnosticRepository.findOne(id);
  }

  async update(id: number, updateMedDiagnosticDto: UpdateMedDiagnosticDto) {
    return await this.medDiagnosticRepository.update(id, updateMedDiagnosticDto);
  }

  async remove(id: number) {
    return await this.medDiagnosticRepository.remove(id);
  }
}
