import { Injectable } from '@nestjs/common';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { SpecializationRepository } from './repository/specialization.repository';

@Injectable()
export class SpecializationsService {

  constructor(private readonly specializationRepository: SpecializationRepository) {}
  async create(createSpecializationDto: CreateSpecializationDto) {
    return await this.specializationRepository.create(createSpecializationDto);
  }

  async findAll() {
    return await this.specializationRepository.findAll();
  }

  async findOne(id: number) {
    return await this.specializationRepository.findOne(id);
  }

  async update(id: number, updateSpecializationDto: UpdateSpecializationDto) {
    return await this.specializationRepository.update(id, updateSpecializationDto);
  }

  async remove(id: number) {
    return await this.specializationRepository.remove(id);
  }
}
