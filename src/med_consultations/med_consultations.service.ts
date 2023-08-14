import { Injectable } from '@nestjs/common';
import { CreateMedConsultationDto } from './dto/create-med_consultation.dto';
import { UpdateMedConsultationDto } from './dto/update-med_consultation.dto';
import { MedConsultationRepository } from './repository/med_consultation.repository';

@Injectable()
export class MedConsultationsService {

  constructor(private readonly medConsultationRepository: MedConsultationRepository) {}
  async create(createMedConsultationDto: CreateMedConsultationDto) {
    return await this.medConsultationRepository.create(createMedConsultationDto);
  }

  async findAll() {
    return await this.medConsultationRepository.findAll();
  }

  async findOne(id: number) {
    return await this.medConsultationRepository.findOne(id);
  }

  async update(id: number, updateMedConsultationDto: UpdateMedConsultationDto) {
    return await this.medConsultationRepository.update(id, updateMedConsultationDto);
  }

  async remove(id: number) {
    return await this.medConsultationRepository.remove(id);
  }
}
