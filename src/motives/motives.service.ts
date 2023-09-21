import { Injectable } from '@nestjs/common';
import { CreateMotiveDto } from './dto/create-motive.dto';
import { UpdateMotiveDto } from './dto/update-motive.dto';
import { MotiveRepository } from './repository/motive.repository';

@Injectable()
export class MotivesService {

  constructor(private readonly motiveRepository: MotiveRepository) {}
  async create(createMotiveDto: CreateMotiveDto) {
    return await this.motiveRepository.create(createMotiveDto);
  }

  async findAll() {
    return await this.motiveRepository.findAll();
  }

  async findOne(id: number) {
    return await this.motiveRepository.findOne(id);
  }

  async update(id: number, updateMotiveDto: UpdateMotiveDto) {
    return await this.motiveRepository.update(id, updateMotiveDto);
  }

  async remove(id: number) {
    return await this.motiveRepository.remove(id);
  }
}
