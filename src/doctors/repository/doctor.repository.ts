import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { DoctorEntity } from '../entities';


@Injectable()
export class DoctorRepository {
    constructor(
        @InjectRepository(DoctorEntity)
        private DoctorRepository: Repository<DoctorEntity>,
    ) { }

//    async create(user: Partial<DoctorEntity>): Promise<ReadUserDto> {
    async create(medical: Partial<DoctorEntity>): Promise<CreateDoctorDto> {
        // Validate if personal exist
        const exists = await this.DoctorRepository.findOne({
            where: [
                { member_number: medical.member_number },
            ],
        });

        if (exists !== null) { // Exists
            throw new HttpException(`El personal ya esta registrado`, HttpStatus.CONFLICT);
        }

        const newUser = this.DoctorRepository.create(medical);
        const response = await this.DoctorRepository.save(newUser);

        return plainToInstance(CreateDoctorDto, response);
    }

    async findAll(): Promise<UpdateDoctorDto[]> {
        const response = await this.DoctorRepository.find();

        return plainToInstance(UpdateDoctorDto, response);
    }

    async findOne(personal_id: number): Promise<UpdateDoctorDto | null> {
        const response = await this.DoctorRepository.findOneBy({ personal_id });

        return plainToInstance(UpdateDoctorDto, response);
    }

    async update(personal_id: number, medical: Partial<DoctorEntity>): Promise<UpdateDoctorDto> {
        await this.DoctorRepository.update(personal_id, medical);

        const response = await this.DoctorRepository.findOneBy({ personal_id });

        return plainToInstance(UpdateDoctorDto, response);
    }

    async remove(personal_id: number): Promise<void> {
        await this.DoctorRepository.delete(personal_id);
    }

}
