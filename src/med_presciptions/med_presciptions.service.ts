import { Injectable } from '@nestjs/common';
import { CreateMedPresciptionDto } from './dto/create-med_presciption.dto';
import { UpdateMedPresciptionDto } from './dto/update-med_presciption.dto';
import { MedPresciptionRepository } from './repository/med_presciption.repository';

@Injectable()
export class MedPresciptionsService {

  constructor(private readonly medPresciptionRepository: MedPresciptionRepository) {}
  async create(createMedDiagnosticDto: CreateMedPresciptionDto) {
    return await this.medPresciptionRepository.create(createMedDiagnosticDto);
  }

  async findAll() {
    return await this.medPresciptionRepository.findAll();
  }

  async findOne(id: number) {
    return await this.medPresciptionRepository.findOne(id);
  }

  async update(id: number, updateMedPresciptionDto: UpdateMedPresciptionDto) {
    return await this.medPresciptionRepository.update(id, updateMedPresciptionDto);
  }

  async remove(id: number) {
    return await this.medPresciptionRepository.remove(id);
  }
}
