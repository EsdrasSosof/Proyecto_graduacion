import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { MedicineRepository } from './repository/medicine.respository';

@Injectable()
export class MedicinesService {

  constructor(private readonly medicineRepository: MedicineRepository) {}
  async create(createMedicineDto: CreateMedicineDto) {
    return await this.medicineRepository.create(createMedicineDto);
  }

  async findAll() {
    return await this.medicineRepository.findAll();
  }

  async findOne(id: number) {
    return await this.medicineRepository.findOne(id);
  }

  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    return await this.medicineRepository.update(id, updateMedicineDto);
  }

  async remove(id: number) {
    return await this.medicineRepository.remove(id);
  }
}
