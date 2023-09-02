import { Injectable } from '@nestjs/common';
import { CreateTypologyDto } from './dto/create-typology.dto';
import { UpdateTypologyDto } from './dto/update-typology.dto';
import { TypologyRepository } from './repository/typology.repository';

@Injectable()
export class TypologiesService {

  constructor(private readonly typologyRepository: TypologyRepository) {}
  async create(createTypologyDto: CreateTypologyDto) {
    return await this.typologyRepository.create(createTypologyDto);
  }

  async findAll() {
    return await this.typologyRepository.findAll();
  }

  async findOne(id: number) {
    return await this.typologyRepository.findOne(id);
  }

  async update(id: number, updateTypologyDto: UpdateTypologyDto) {
    return await this.typologyRepository.update(id, updateTypologyDto);
  }

  async remove(id: number) {
    return await this.typologyRepository.remove(id);
  }
}
