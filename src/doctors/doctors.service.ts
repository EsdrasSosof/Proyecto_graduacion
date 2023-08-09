import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorRepository } from './repository/doctor.repository';

@Injectable()
export class DoctorsService {

  constructor(private readonly doctorRepository: DoctorRepository) {}
  async create(createDoctorDto: CreateDoctorDto) {
    return await this.doctorRepository.create(createDoctorDto);
  }

  async findAll() {
    return await this.doctorRepository.findAll();
  }

  async findOne(id: number) {
    return await this.doctorRepository.findOne(id);
  }

//  async findByUserNamePassword(username: string, password: string) {
//    return await this.doctorRepository.findByUserNamePassword(username, password);
// }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return await this.doctorRepository.update(id, updateDoctorDto);
  }

  async remove(id: number) {
    return await this.doctorRepository.remove(id);
  }
}