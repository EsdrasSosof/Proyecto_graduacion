import { Injectable } from '@nestjs/common';
import { CreateMedRecordDto } from './dto/create-med_record.dto';
import { UpdateMedRecordDto } from './dto/update-med_record.dto';
import { MedRecordRepository } from './repository/med_record.repository';

@Injectable()
export class MedRecordsService {

  constructor(private readonly medRecordRepository: MedRecordRepository) {}
  async create(createMedRecordDto: CreateMedRecordDto) {
    return await this.medRecordRepository.create(createMedRecordDto);
  }

  async findAll() {
    return await this.medRecordRepository.findAll();
  }

  async findOne(id: number) {
    return await this.medRecordRepository.findOne(id);
  }

  async update(id: number, updateMedRecordDto: UpdateMedRecordDto) {
    return await this.medRecordRepository.update(id, updateMedRecordDto);
  }

  async remove(id: number) {
    return await this.medRecordRepository.remove(id);
  }
}
