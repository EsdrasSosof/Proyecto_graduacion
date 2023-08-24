import { Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { DetailRepository } from './repository/detail.repository';

@Injectable()
export class DetailsService {

  constructor(private readonly detailRepository: DetailRepository) {}
  async create(createDetailDto: CreateDetailDto) {
    return await this.detailRepository.create(createDetailDto);
  }

  async findAll() {
    return await this.detailRepository.findAll();
  }

  async findOne(id: number) {
    return await this.detailRepository.findOne(id);
  }

  async update(id: number, updateDetailDto: UpdateDetailDto) {
    return await this.detailRepository.update(id, updateDetailDto);
  }

  async remove(id: number) {
    return await this.detailRepository.remove(id);
  }
}
