import { Injectable } from '@nestjs/common';
import { CreateMedPatientDto } from './dto/create-med_patient.dto';
import { UpdateMedPatientDto } from './dto/update-med_patient.dto';
import { MedPatientRepository } from './repository/med_patient.repository';

@Injectable()
export class MedPatientsService {

  constructor(private readonly medPatientRepository: MedPatientRepository) {}
  async create(createMedPatientDto: CreateMedPatientDto) {
    return await this.medPatientRepository.create(createMedPatientDto);
  }

  async findAll() {
    return await this.medPatientRepository.findAll();
  }

  async findOne(id: number) {
    return await this.medPatientRepository.findOne(id);
  }

  async update(id: number, updateMedPatientDto: UpdateMedPatientDto) {
    return await this.medPatientRepository.update(id, updateMedPatientDto);
  }

  async remove(id: number) {
    return await this.medPatientRepository.remove(id);
  }
}
